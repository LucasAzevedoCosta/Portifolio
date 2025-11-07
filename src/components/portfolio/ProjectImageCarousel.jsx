import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectImageCarousel({ images, currentIndex, onChange }) {
  const total = images.length;

  const next = (e) => {
    e.stopPropagation();
    onChange((currentIndex + 1) % total);
  };

  const prev = (e) => {
    e.stopPropagation();
    onChange(currentIndex === 0 ? total - 1 : currentIndex - 1);
  };

  return (
    <div className="relative aspect-video overflow-hidden bg-slate-700">
      <img
        src={images[currentIndex]}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-800 text-white p-1 rounded-md transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-800 text-white p-1 rounded-md transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-cyan-400 w-4" : "bg-slate-500"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
