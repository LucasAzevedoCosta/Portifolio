export function AboutIntro({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-cyan-400 mb-4">{title}</h2>
      <p className="text-slate-400 text-lg">{subtitle}</p>
    </div>
  );
}
