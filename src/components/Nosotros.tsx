import lawyer from '../recursos/copia1.jpg'
export const Nosotros = () => {
  return (
<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2" id='nosotros'>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right mt-10">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        EL ESTUDIO
      </h2>

      <p className=" text-gray-500 md:mt-4 md:block">
      Somos un estudio jurídico de la Ciudad de Buenos Aires de amplia trayectoria y experiencia en diferentes áreas legales. 
      Poseemos un equipo interdisciplinario para abordar de la mejor manera posible las problemáticas que posea.</p>

      <div className="mt-4 md:mt-8">
        <a
          href="#contacto"
          className="inline-block rounded bg-custom-marron1 px-12 py-3 text-sm font-medium text-white transition hover:bg-custom-marron2 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Conocer más
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={lawyer}
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
  )
}
