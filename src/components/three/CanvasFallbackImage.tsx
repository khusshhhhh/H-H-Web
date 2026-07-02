import Image from "next/image";

interface CanvasFallbackImageProps {
  className?: string;
}

/** Static fallback shown when WebGL is unavailable, on low-power devices, or under reduced motion. */
export function CanvasFallbackImage({ className }: CanvasFallbackImageProps) {
  return (
    <div className={className}>
      <Image
        src="/images/home/hero.jpg"
        alt="Contemporary Hills & Harbour home exterior — static preview shown in place of the interactive 3D model"
        fill
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
