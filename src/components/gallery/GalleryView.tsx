"use client";

import { Media } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "16px",
      }}
    >
      {gallery.images.map((image, index) => (
        <Media
          key={index}
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          radius="m"
          aspectRatio="4 / 3"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}