import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectModalCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  return (
    <div className="relative">
      <div className="aspect-video bg-slate-700 rounded-xl overflow-hidden">
        <img
          src={images[index]}
          alt={`Imagem ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 rounded-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-cyan-400 w-8" : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
