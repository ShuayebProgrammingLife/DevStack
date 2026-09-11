import { use, useState } from "react";;
const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2" >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white" >DS</span>
      <span className="text-lg font-extrabold tracking-tight" >Dev<span className="text-brand-gradient" >Stack</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-state-100 bg-white/90 backdrop-blur" >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" >
        {/* for phn humburger left side */}
        <button type="button" aria-label="Toggle navigation menu" aria-expanded={open} 
        onClick={()=> setOpen((v)=> !v)} 
        className="grid h-9 w-9 place-items-center rounded-md text-state-700 hover:bg-state-100 md:hidden" >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop => logo left or Phn: logo center */}
        <div className="md:flex-1"><Logo/></div>
    </div>
    </header >
  )
}