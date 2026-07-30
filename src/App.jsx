import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HousesSlider from './components/HousesSlider'
import WeatherSection from './components/WeatherSection'
import Calculator from './components/Calculator'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HousesSlider />
        <WeatherSection />
        <Calculator />
        <BookingForm />
      </main>
      <Footer />
    </>
  )
}
