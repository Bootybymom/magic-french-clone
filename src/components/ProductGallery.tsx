import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gal1 from "@/assets/gal1.png.asset.json";
import gal2 from "@/assets/gal2.png.asset.json";
import gal3 from "@/assets/gal3.webp.asset.json";
import gal4 from "@/assets/gal4.webp.asset.json";
import gal5 from "@/assets/gal5.png.asset.json";
import gal6 from "@/assets/gal6.png.asset.json";
import gal7 from "@/assets/gal7.webp.asset.json";
import gal8 from "@/assets/gal8.png.asset.json";

const images = [
  { url: gal1.url, alt: "Système Focus NeuroEnfants™ — +180 activités imprimables" },
  { url: gal2.url, alt: "Approuvé par plus de 10 000 familles" },
  { url: gal3.url, alt: "Activité de concentration avec des cercles de couleur" },
  { url: gal4.url, alt: "Enfant réalisant une activité NeuroKids™" },
  { url: gal5.url, alt: "Sans NeuroKids™ vs Avec NeuroKids™" },
  { url: gal6.url, alt: "Parfait pour les enfants facilement distraits" },
  { url: gal7.url, alt: "Famille jouant avec les activités NeuroKids™" },
  { url: gal8.url, alt: "Tous les bonus gratuits inclus" },
];

export function ProductGallery() {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-card">
        <img
          src={images[index]!.url}
          alt={images[index]!.alt}
          className="aspect-square w-full object-cover"
        />
        <button
          type="button"
          aria-label="Image précédente"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md backdrop-blur"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          aria-label="Image suivante"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md backdrop-blur"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={img.url}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Voir l'image ${i + 1}`}
            className={`w-16 shrink-0 overflow-hidden rounded-xl border-2 transition ${
              i === index ? "border-primary" : "border-border"
            }`}
          >
            <img src={img.url} alt={img.alt} className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>

    </div>
  );
}
