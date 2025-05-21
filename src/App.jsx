import TabsCarousel from './components/TabsCarousel/TabsCarousel'
import FAQ from './components/FAQ/FAQ'
import './App.css'
import ExtensionSection from './components/ExtensionSection/ExtensionSection'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <>
      <Header/>
      <Hero />
      <TabsCarousel />
      <ExtensionSection/>
      <FAQ />
      <Footer />
    </>
  )
}

export default App
