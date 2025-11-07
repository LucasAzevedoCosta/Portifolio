export function SkillsCategories({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex justify-center gap-3 mb-12 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30"
              : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
