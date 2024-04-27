import './App.css'
import { Banner } from './components/Banner'
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

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d725.9308602123738!2d-65.09857107147103!3d-43.29911302215369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe01571e1558eccd%3A0xdaded327f615addc!2sLewis%20Jones%20261%2C%20U9103%20Rawson%2C%20Chubut!5e0!3m2!1ses!2sar!4v1710527042862!5m2!1ses!2sar" width="400" height="300" style={{border:0}} 
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </>
  )
}

export default App
