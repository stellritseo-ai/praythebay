import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Photo } from "@/components/site/primitives";
import { photos } from "@/content/site";

const gallery = [
  { p: photos.worshipLeader, a: "A worship leader prays during a night of worship" },
  { p: photos.outdoorPrayer, a: "Women pray together outdoors at a Bay Area gathering" },
  { p: photos.beachWalk, a: "Young adults walk along the coast at sunset" },
  { p: photos.micBW, a: "A young leader prays into a microphone, black and white" },
  { p: photos.womenPrayer, a: "Women embrace in prayer at an outdoor gathering" },
  { p: photos.circle, a: "A circle of believers prays together in the prayer room" },
  { p: photos.outdoorPrayer2, a: "A prayer team prays for one another outdoors" },
];

export function GallerySection() {
  const [i, setI] = useState(0);
  const n = gallery.length;
  return (
    <section aria-labelledby="gallery-h" className="bg-night py-28 text-ivory">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-6 px-5 md:px-10">
        <h2 id="gallery-h" className="display-lg">Experience <em className="text-sky">the movement</em></h2>
        <div className="flex items-center gap-4">
          <span className="eyebrow tabular-nums text-ivory/50">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
          <button type="button" aria-label="Previous photo" onClick={() => setI((i - 1 + n) % n)} className="border border-line-dark p-3 hover:bg-ivory hover:text-ink"><ArrowLeft className="size-4" /></button>
          <button type="button" aria-label="Next photo" onClick={() => setI((i + 1) % n)} className="border border-line-dark p-3 hover:bg-ivory hover:text-ink"><ArrowRight className="size-4" /></button>
        </div>
      </div>
      <div className="mt-12 overflow-hidden">
        <motion.ul
          className="flex gap-4 pl-5 md:gap-6 md:pl-10"
          animate={{ x: `calc(${-i} * (min(82vw, 1100px) + 1.5rem))` }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {gallery.map((g, k) => (
            <li key={g.p} className="aspect-[16/10] w-[min(82vw,1100px)] shrink-0 overflow-hidden">
              <Photo src={g.p} alt={g.a} className={`transition-all duration-1000 ${k === i ? "" : "opacity-40 grayscale"}`} />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

