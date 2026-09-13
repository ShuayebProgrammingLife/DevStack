const LINK_GROUPS: { title:string, links:string[]}[] =[
  {title:'Product', links:['Home', 'Technologies','Projects']},
  {title:'Compant', links:['About', 'Contact', 'Careers']},
  {title:'Legal', links:['Privacy Policy','Terms of Service']}
]

export default function Footer(){
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
                DS
              </span>

              <span className="text-lg font-extrabold tracking-tight">
                Dev<span className="text-brand-gradient">
                  Stack
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
              <a href="https://github.com/ShuayebProgrammingLife" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="https://x.com/ShuayebHossain1" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/shuayeb-hossain-3329b03ab/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
                Linkedin
              </a>
            </div>
          </div>


          {
            LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-bold uppercase tracking-wide text-ink">
                  {group.title}
                </h4>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.links.map((link) =>(
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-500 hover:text-slate-800">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            Privacy
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}