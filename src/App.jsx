import { useEffect } from 'react'
import './App.css'
import NavBar from './components/navBar/NavBar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/home/Home'

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      // offset: 20
    })
  }, [])

  return (
    <>
      <NavBar />
      {/* Home Pg  */}
      <Home/>
    </>
  )
}

export default App
