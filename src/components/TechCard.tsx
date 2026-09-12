import type { Technology } from "../types/technology";

const BADGE_COLORS: Record<string, string> = {
  Popular: 'bg-sky-50 text-sky-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-amber-50 text-amber-600',
  Standard: 'bg-slate-100 text-slate-600',
  Cache: 'bg-rose-50 text-rose-600',
  Flexible: 'bg-teal-50 text-teal-600',
  Ubiquitous: 'bg-yellow-50 text-yellow-700',
  Essential: 'bg-indigo-50 text-indigo-600',
  Robust: 'bg-orange-50 text-orange-600',
  Modern: 'bg-cyan-50 text-cyan-600',
  Containers: 'bg-blue-50 text-blue-600',
  'Top SQL': 'bg-sky-50 text-sky-700',
}

function getBadgeColor(badge: string) {
  return BADGE_COLORS[badge] ?? 'bg-slate-50 text-slate-600'
}

interface TechCardProps {
  tech: Technology,
  isAdded: boolean,
  onAdd: (tech: Technology) => void
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className={`flex flex-col rounded-2xl border bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover-z-10 relative ${isAdded ? 'border-emerald-300' : 'border-slate-100'
      }`}>
      <div className="mb-4 flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`%{tech.name} logo`}
          className="h-9 w-9 object-contain"
          loading="lazy">
        </img>
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${getBadgeColor(tech.badge)}`}>
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