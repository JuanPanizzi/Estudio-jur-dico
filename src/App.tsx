import './App.css'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Navbar } from './components/Navbar'
import { Nosotros } from './components/Nosotros'
import { Separador } from './components/Separador'
import { Servicios } from './components/Servicios'
import { Stats } from './components/Stats'

function App() {

  return (
    <>
    <Navbar/>
      <Banner/>
      <Stats/>
      <Servicios/>
      <Separador title={'NOSOTROS'}/>
      <Nosotros/>
      <Separador title={'CONTACTO'}/>
      <Form/>
      <Footer/>
     

    </>
  )
}

export default App
