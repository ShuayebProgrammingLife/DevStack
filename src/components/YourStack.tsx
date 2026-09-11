import type { Technology } from "../types/technology";

interface YourStackProps{
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({stack, onRemove, onRemoveAll}: YourStackProps){
  const count = stack.length

  return(
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-card lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-ink">Your Stack</h3>
      {
        count === 0 ? (
          <>
            <p className="mt-1 text-sm text-slate-400">No technologies selected yet.</p>
            <div className="mt-4 rounded-xl border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
              Your stack is empty
            </div>
          </>
        ) : (
          <>
            <p className="mt-1 text-sm text-slate-400">
              {count} Technology Selected{count>1 ? '' : ''}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {stack.map((tech) => (
                <li
                  key={tech.id}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5"
                >
                  <img src={tech.icon} alt="" className="h-8 w-8 object-contain"></img>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink">
                      {tech.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {tech.category}
                    </p>
                    </div>

                    <button
                      type="button"
                      aria-label={`Remove ${tech.name} from stack`}
                      onClick={() => onRemove(tech.id)}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                      >
                        ❌
                      </button>
                </li>
              ) )}
            </ul>
            <button
              type="button"
              onClick={onRemoveAll}
              className="mt-5 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 hover:bg-rose-50"
            >
              Remove All
            </button>
          </>
        )
      }
    </aside>
  )
}