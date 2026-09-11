import type { Technology } from "../types/technology";

interface TechCardProps {
  tech: Technology,
  isAdded: boolean,
  onAdd: (tech: Technology) => void
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
      <div className="mb-4 flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`%{tech.name} logo`}
          className="h-9 w-9 object-contain"
          loading="lazy">
        </img>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-ink">
        {tech.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-slate-50 px-2.5 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-400">
          {tech.difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-amber-400">*</span>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
          isAdded 
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600' 
            : 'bg-ink text-white hover:opacity-90'
        }`}
        >
          {isAdded ? '✅ Added to stack' : 'Add to Stack'}
      </button>
    </div>
  )
}