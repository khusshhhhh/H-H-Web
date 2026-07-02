export default function Loading() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center bg-cream" role="status" aria-label="Loading">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-charcoal/20 border-t-terracotta" />
    </div>
  );
}
