import banner from '../recursos/banner.jpg'
// <!--
// Heads up! 👋

// This component comes with some `rtl` classNameNamees. Please remove them if they are not needed in your project.
// -->
// bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l
export const Banner = () => {

  return (
<section
 className={`relative bg-cover bg-center bg-no-repeat`}
 style={{ backgroundImage: `url(${banner})` }}>
  <div
    className="absolute inset-0 bg-black opacity-25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 "
  >
    <div className="max-w-xl text-center sm:text-left ltr:sm:text-left rtl:sm:text-right ">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
        Estudio Jurídico

        <strong className="block font-extrabold text-custom-rojo1"> De Bella y Asociados </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
        Servicios Jurídicos Integrales. <br />
        Soluciones laborales y empresariales.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 ">
        <a
          href="#"
          className="block w-full rounded bg-custom-rojo1 px-12 py-3 text-sm font-medium text-white shadow hover:font-bold focus:outline-none focus:ring active:bg-rose-500 w-1/2 sm:w-auto"
        >
          Contacto
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-custom-rojo1 shadow  hover:font-bold hover:font-medium hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Nosotros
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
