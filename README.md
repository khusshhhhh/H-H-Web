# Hills & Harbour — Website

A premium, cinematic marketing website for Hills & Harbour, an Adelaide residential building company. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP, React Three Fiber and Lenis.

> **Repository location note:** this project lives at `K:\MissionNew\Prelette\HH-Claude` rather than the originally-requested `K:\MissionNew\Prelette\H&H\Claude`. The `&` in `H&H` breaks Windows' `cmd.exe`-based process spawning that `npm`/`next` rely on internally (confirmed — every `npm`/`npx` command fails with a `removeChild`/`MODULE_NOT_FOUND`-style error when run from a path containing `&`, in both PowerShell and Git Bash). Run all commands below from `K:\MissionNew\Prelette\HH-Claude`.

## Installation

Requires Node.js 20+ and npm.

```bash
cd K:\MissionNew\Prelette\HH-Claude
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Uses Turbopack for fast refresh.

```bash
npm run lint       # ESLint (includes React Compiler-aware rules)
npx tsc --noEmit   # TypeScript type-check
```

## Production build

```bash
npm run build
npm run start       # serves the production build on http://localhost:3000
```

`npm run build` runs a full type-check and static-generation pass for every route, including all project/service/journal detail pages (via `generateStaticParams`).

## Project structure

```
src/
  app/                One route per folder (App Router). api/ holds the two route handlers.
  components/
    layout/           Header, Footer, MenuOverlay, PageTransition
    home-sections/    The ten homepage sections (Hero, PhilosophySection, ...)
    projects/         Project card/grid/gallery/filter/before-after/floorplan components
    services/         Service card/list components
    process/          Shared ProcessTimeline (compact + full variants)
    three/            All React Three Fiber code (see "3D model" below)
    forms/            Enquiry (8-step) and Contact forms, shared field primitives
    motion/           Reusable animation primitives (ScrollReveal, SplitText, MaskReveal, ParallaxLayer, LenisProvider)
    ui/               Design-system primitives (Button, Container, SectionHeading, ...)
  content/            All editable site copy and structured content — see below
  types/              TypeScript interfaces for every content type
  lib/                Utilities, SEO helpers, zod validation schemas, animation config
  hooks/              useReducedMotionSafe, useMediaQuery, useDeviceCapability, useInViewport, ...
public/images/        All imagery, organised to mirror the content structure
```

## Editing content

**All site copy lives in `src/content/*.ts` as plain typed arrays/objects — no CMS is wired up yet, but the shape is CMS-ready** (see below). To change any text on the site, edit these files rather than the components:

| File | Controls |
| --- | --- |
| `content/site-config.ts` | Company name, tagline, phone, email, address, licence number, memberships, stats, nav menus |
| `content/projects.ts` | All 7 case-study projects (hero/gallery/materials, copy, category, featured flag) |
| `content/services.ts` | The 6 services (Custom Homes, Luxury Homes, Knockdown Rebuilds, House & Land, Residential Developments, Renovations & Extensions) |
| `content/process-steps.ts` | The 8-stage building process (used on the homepage and `/process`) |
| `content/testimonials.ts` | Client quotes |
| `content/team.ts` | Team bios and photos |
| `content/articles.ts` | Journal posts |
| `content/enquiry-options.ts` | Enquiry form dropdown/option values, **including the budget ranges — these are explicitly editable placeholders, not fixed quotes** |

Adding a new project, service, team member or journal post is just adding a new object to the relevant array — every listing page and filter reads from these arrays automatically.

### Connecting a real CMS later

Each content type has a corresponding interface in `src/types/` (`Project`, `Service`, `ProcessStep`, `Testimonial`, `TeamMember`, `Article`). To move to Sanity, Contentful or similar: implement a fetch function that returns data matching these interfaces, and swap the import in the relevant `content/*.ts` file (or replace it with a server-side fetch in the page component). No component code needs to change, since components only ever consume the typed interfaces, never the raw content files directly.

## Replacing placeholder images

**Every image on the site is a licensed stock placeholder**, flagged in code with `isPlaceholder: true` on its `PlaceholderImage` object (`src/types/image.ts`). To find every placeholder reference:

```bash
grep -rn "isPlaceholder" src/content
```

Images live under `public/images/`, organised by section:

```
public/images/
  home/hero.jpg                          Homepage hero + 3D fallback image
  projects/<slug>/hero.jpg               Full-screen project intro
  projects/<slug>/card.jpg               Grid card image (portrait projects only — others reuse hero.jpg)
  projects/<slug>/gallery/01-04.jpg      Project gallery
  projects/<slug>/materials/01-03.jpg    Material palette swatches
  projects/<slug>/before.jpg, after.jpg  Before/after slider (Unley + Henley Beach only)
  services/<slug>.jpg                    Service card + detail hero
  team/01-05.jpg                         Team headshots
  journal/<slug>.jpg                     Article cover images
  process/concept-design.jpg             Process step illustration
```

To replace an image: drop a new file in the same location (same filename) **or** update the `src` path in the relevant `content/*.ts` entry, and update `width`/`height` to match the new file's aspect ratio (these are used to prevent layout shift — see `next/image` docs). Remove `isPlaceholder: true` once real photography is in place, or leave it as a permanent flag for future audits.

The floor-plan diagram on project pages (`components/projects/FloorPlanViewer.tsx`) is an illustrative SVG, not a photo — replace it with the real approved drawing (image or PDF viewer) per project when available.

## Replacing the 3D model

The interactive house (`components/three/`) is a **procedural, primitive-based model** — boxes and planes composed in `ProceduralHouse.tsx` — not a sourced GLB file, per the brief's "lightweight procedural placeholder" guidance. This keeps the bundle small and avoids needing a licensed 3D asset.

To swap in a real GLB model:

1. Add the `.glb` file to `public/models/`.
2. In `components/three/ProceduralHouse.tsx`, replace the primitive geometry with a `useGLTF("/models/your-model.glb")` call from `@react-three/drei`, and map your model's material names to the existing `materialKey` prop for the material-swap feature to keep working.
3. Compress the model first (`gltf-transform` or Blender's glTF exporter with Draco compression) — target under ~2MB for a good mobile experience.
4. Update `HouseMassing.tsx` if you want the wireframe-to-solid morph in the Philosophy section to use the same asset (currently it reuses `ProceduralHouse` with a `wireframeOnly` flag, which works with any geometry).

The 3D layer already has full graceful-degradation built in (`hooks/useDeviceCapability.ts` + `components/three/SceneLoader.tsx`): it falls back to a static image (`CanvasFallbackImage.tsx`) under `prefers-reduced-motion`, when WebGL is unavailable, or on mobile devices with a low core count — this logic doesn't need to change when you swap the model.

## Enquiry form / API integration

The 8-step enquiry form (`/enquiry`) and the contact form (`/contact`) both currently **log submissions to the server console** (`src/app/api/enquiry/route.ts` and `src/app/api/contact/route.ts`) rather than sending them anywhere real. Both routes already validate input (zod), check a honeypot field, enforce a minimum fill-time, and rate-limit by IP — the only missing piece is the actual downstream integration.

To connect a real CRM or email service, edit the `TODO(integration)` block in each route handler, for example:

```ts
// src/app/api/enquiry/route.ts, after zod validation succeeds:
await fetch("https://api.your-crm.com/v1/leads", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.CRM_API_KEY}`,
  },
  body: JSON.stringify(parsed.data),
});
```

Add the required secret to a `.env.local` file (never commit this file, and never reference secrets from client components — these two route handlers are the only place server-side secrets should be read). Common options: [Resend](https://resend.com) or SendGrid for transactional email notifications, or a direct CRM API (HubSpot, Pipedrive, Zoho).

The Step 8 "plans or inspiration" upload currently records only the file's **name and size** — no file bytes are uploaded anywhere yet. If you need real file uploads, wire the `<input type="file">` in `components/forms/steps/Step8Upload.tsx` to a storage provider (S3, Cloudinary, Vercel Blob) and include the resulting URL in the form payload.

## Deployment

The site is a standard Next.js App Router project with no special infrastructure requirements (no database, no custom server).

**Vercel** (recommended, zero config): connect the repository and deploy — the framework is auto-detected.

**Any Node host:**
```bash
npm run build
npm run start
```

Before going live:
- Set `NEXT_PUBLIC_SITE_URL` / update `siteConfig.url` in `content/site-config.ts` to the real production domain (used for canonical URLs, sitemap, and JSON-LD).
- Add real CRM/email credentials as environment variables (see "Enquiry form / API integration" above).
- Replace placeholder imagery, copy and the licence number (see below).

## Known placeholders to replace before launch

- **All photography** — every image is licensed stock, flagged with `isPlaceholder: true` (see "Replacing placeholder images" above).
- **All project, testimonial, team and journal copy** — realistic but fictional, written to demonstrate tone and structure.
- **Builder's licence number** (`site-config.ts` → `builderLicence`) — currently a placeholder string.
- **Industry memberships and any awards** (`site-config.ts` → `memberships`) — verify current, real memberships.
- **Budget ranges in the enquiry form** (`content/enquiry-options.ts`) — explicitly editable placeholder bands, not fixed quotes; review against current build costs.
- **CRM/email integration** in both API routes — currently console-log only.
- **3D model** — currently a procedural placeholder; replace with a real GLB if bespoke visualisation is available (see above).
- **Company phone/email/address/social links** (`site-config.ts`) — currently placeholder values.

## Accessibility & performance notes

- All animation respects `prefers-reduced-motion` via a single hook (`useReducedMotionSafe`, backed by `useSyncExternalStore`) plus a hard CSS-level fallback in `globals.css`.
- The 3D layer is dynamically imported and never enters the bundle for users on reduced-motion, low-power/mobile devices, or without WebGL support (`hooks/useDeviceCapability.ts`, `components/three/SceneLoader.tsx`).
- The full-screen menu overlay implements a manual focus trap, Escape-to-close, and returns focus sensibly; all interactive elements are real `<button>`/`<a>`/`<input>` elements with visible focus rings.
- Structured data (`LocalBusiness`/`HomeAndConstructionBusiness`, `BreadcrumbList`, `Article`) is injected via `components/ui/JsonLd.tsx`; sitemap and robots.txt are generated from the same content arrays that drive the pages, so they stay in sync automatically.
