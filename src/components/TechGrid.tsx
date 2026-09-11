import type { Technology } from '../types/technology'
import TechCard from './TechCard'

interface TechGridProps{
  technologies: Technology[]
  loading: boolean
  stackIds: Set<string>
  onAdd: (tech: Technology) => void
}

export default function TechGrid ({technologies, loading, stackIds, onAdd}: TechGridProps){
  if(loading){
    return(
      <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-dashed border-slate-200">
        <div className="flex items-center gap-3 text-slate-500">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-pink-500"></span>
          <span className='text-sm font-medium'>Loading technologies...</span>
        </div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
      {
        technologies.map((tech) =>(
          <TechCard key={tech.id} tech={tech} isAdded={stackIds.has(tech.id)}
            onAdd={onAdd} />
        ))
      }
    </div>
  )
}