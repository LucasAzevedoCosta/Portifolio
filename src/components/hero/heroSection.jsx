import { HeroContent } from "./heroContent";
import { HeroCodePreview } from "./heroCodePreview";
import { BackgroundOrbs } from "./backgroundOrbs";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4"
    >
      <BackgroundOrbs />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroCodePreview />
        </div>
      </div>
    </section>
  );
}
