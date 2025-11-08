export function NavigationItem({
  label,
  icon: Icon,
  isActive = false,
  isFirst = false,
  onClick
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`
          w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
          ${isActive
            ? 'bg-slate-700/50 text-red-500 shadow-lg shadow-red-500/10'
            : 'text-slate-300 hover:bg-slate-700/30 hover:text-white'
          }
          ${isFirst && isActive ? 'text-red-500' : ''}
        `}
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
        <span className="font-medium text-sm">{label}</span>
        {isActive && (
          <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>
    </li>
  );
}
