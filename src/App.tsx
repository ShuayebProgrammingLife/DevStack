import { useEffect, useMemo, useState } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToasify.css'

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

  const stackIds = useMemo

  return (
    <>
      <Navbar />
      <Hero />
      {/* <TechGrid /> */}
    </>
  )
}

export default App