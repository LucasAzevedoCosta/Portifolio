import { useEffect, useState } from "react";

export function SkillProgressBar({ level, colors }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const timeout = setTimeout(() => {
      setProgress(level);
    }, 50);
    return () => clearTimeout(timeout);
  }, [level]);

  return (
    <div className="relative">
      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colors.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
