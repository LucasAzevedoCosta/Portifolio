export function SkillProgressBar({ level, colors }) {
  return (
    <div className="relative">
      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colors.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
