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
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500"></p>
    </div>


  )
}