export function AboutTrajectory({ title, paragraphs }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>

        <div className="space-y-4 text-slate-300 text-justify">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
