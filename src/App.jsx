import Header from './components/Header'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Posters from './components/Posters'
import Services from './components/Services'
import About from './components/About'
import Booking from './components/Booking'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Packages />
        <Posters />
        <Services />
        <About />
        <Booking />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
