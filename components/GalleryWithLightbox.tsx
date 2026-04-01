"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

export type GalleryImage = {
  src: string;
  filename: string;
};

export default function GalleryWithLightbox({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelected(image)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-soft transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <Image
              src={image.src}
              alt={`Elektrotechnisch project ${image.filename} — De Elektricien`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Afbeelding vergroten"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Sluiten"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative h-[85vh] w-[90vw] max-w-5xl animate-[lightboxZoom_0.25s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={`Project ${selected.filename} - vergroot`}
              fill
              className="rounded-2xl object-contain shadow-2xl"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
