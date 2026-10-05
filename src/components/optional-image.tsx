import Image from "next/image";

import type { MediaAsset } from "@/content/types";

export function OptionalImage({ image, className = "editorial-image" }: { image?: MediaAsset; className?: string }) {
  if (!image) return null;

  return (
    <figure className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 52rem) 100vw, 50vw"
      />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
