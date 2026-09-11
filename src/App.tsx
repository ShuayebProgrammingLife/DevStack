import { useEffect, useMemo, useState } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechGrid from './components/TechGrid'
import YourStack from './components/YourStack'
import Footer from './components/Footer'
import type { Technology } from './types/technology'
import technologiesData from './data/technologies.json'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [stack, setStack] = useState<Technology[]>([])

  useEffect(() =>{
    setLoading(true)
      const timer =setTimeout(() =>{
        try{
          setTechnologies(technologiesData as Technology[])
        }
        catch{
          toast.error('Could not load technologies. Please refresh the page.')
        }
        finally{
          setLoading(false);
        }
      },300)
      return() => clearTimeout(timer)
  }, [])

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack])

  const handleAdd = (tech: Technology) =>{
    if(stackIds.has(tech.id)){
      toast.warning(`${tech.name} is already in your stack`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack`)
  }

  const handleRemove = (id:string) =>{
    const tech = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if(tech) toast.info(`${tech.name} removed from your stack`)
  }

  const handleRemoveAll =() =>{
    if(stack.length === 0)
      return;
    setStack([])
    toast.info(`Your stack has been cleared.`)
  }

  return (
    <div id="top" className='min-h-screen bg-white text-ink'>
      <Navbar />
      <Hero />

      <section id="technologies" className='mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
          Explore the <span className='text-brand-gradient'>Technologies</span>
        </h2>

        <p className='mt-3 max-w-xl text-slate-500'>
          Pick one technology per category to build your ideal stack.
        </p>

        <div className='mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]'>
          <TechGrid
            technologies={technologies}
            loading={loading}
            stackIds={stackIds}
            onAdd={handleAdd} 
            />
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll} />
        </div>
      </section>

      <Footer />

      <ToastContainer position='top-right' autoClose={2500} newestOnTop />
    </div>
  )
}

export default App