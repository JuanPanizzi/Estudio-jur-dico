import React from 'react'


// user-tie <i classNameName="fa-solid fa-user-tie"></i>
// maleta <i classNameName="fa-solid fa-briefcase" ></i>
// industry  <i classNameName="fa-solid fa-industry"></i>

export const Servicios = () => {
  return (

    <section className="bg-custom-gris2 text-black pt-10">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-xl font-extrabold sm:text-4xl text-custom-rojo1 pt-5">ÁREAS DE PRÁCTICA</h2>

      <p className="mt-4 text-gray-500">
      Disfrutamos de nuestra profesión y estamos encantados de ofrecerle nuestros servicios en las siguientes áreas de práctica de Derecho:
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-black p-8 shadow-xl transition hover:border-custom-rosa1 hover:shadow-custom-rosa1"
        href="#"
      >
        <i className="fa-solid fa-briefcase fa-xl" style={{color: "#b24c52"}} ></i>

        <h2 className="mt-4 text-xl font-bold text-black">Derecho Laboral</h2>

        <p className="mt-1 text-sm text-gray-500">
        Asesoramiento en contratos laborales, disputas de empleo y normativas laborales complejas.
           Asesoramiento para empleados y empleadores. 
        </p>
      </a>

      <a
        className="block rounded-xl border border-black p-8 shadow-xl transition hover:border-custom-rojo1 hover:shadow-custom-rosa1"
        href="#"
      >
        <i className="fa-solid fa-industry fa-xl text-custom-rojo1"></i>

        <h2 className="mt-4 text-xl font-bold text-black">Derecho comercial</h2>

        <p className="mt-1 text-sm text-gray-500">
        Asesoramiento legal especializado en derecho empresarial para empresas de todos los tamaños. Desde la formación de empresas hasta la resolución de disputas.
        </p>
      </a>

      <a
        className="block rounded-xl border border-black p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <i className="fa-solid fa-people-roof text-custom-rojo1 fa-xl"></i>

        <h2 className="mt-4 text-xl font-bold text-black">Derecho de Familia</h2>

        <p className="mt-1 text-sm text-gray-500">
        Asesoramiento y patrocinio jurídico
en todas las áreas derivadas de las distintas formas de organización familiar. Matrimonio. Uniones convivenciales. Familias ensambladas y Familias monoparentales.
        </p>
      </a>

      <a
        className="block rounded-xl border border-black p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <i className="fa-solid fa-person-falling-burst fa-xl text-custom-rojo1"></i>

        <h2 className="mt-4 text-xl font-bold text-black">Derecho de daños</h2>

        <p className="mt-1 text-sm text-gray-500">
        Asesoramiento en cualquier tipo de conflicto que surja de la Responsabilidad Civil en general (contractual o extracontractual). Reclamando ante las Companias Aseguradoras y/o Responsables del evento dañoso, Obras Sociales, Seguros Médicos.
        </p>
      </a>

      <a
        className="block rounded-xl border border-black p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <i className="fa-solid fa-people-arrows fa-xl text-custom-rojo1"></i>

        <h2 className="mt-4 text-xl font-bold text-black">Sucesiones</h2>

        <p className="mt-1 text-sm text-gray-500">
          Asesoramiento en toda clase de procesos sucesorios. 
        </p>
      </a>

      <a
        className="block rounded-xl border border-black p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
         <i className="fa-solid fa-user-tie fa-xl text-custom-rojo1"></i>

        <h2 className="mt-4 text-xl font-bold text-black">Derecho administrativo</h2>

        <p className="mt-1 text-sm text-gray-500">
        Asesoramiento en toda clase de procedimientos administrativos, actuando con eficacia y profesionalidad ante la jurisdicción contencioso-administrativa en todas sus instancias, con un asesoramiento personalizado y a la medida de las distintas circunstancias de cada caso e individuo.
        </p>
      </a>
    </div>

    <div className="mt-12 text-center">
      {/* <a
        href="#"
        className="inline-block rounded bg-custom-rojo1 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
       Conocer Más
      </a> */}
    </div>
  </div>
</section>
//     <section classNameName="bg-custom-gris2 text-black">
//   <div classNameName="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//     <div classNameName="max-w-xl">
//       <h2 classNameName="text-3xl font-bold sm:text-4xl">Áreas de práctica</h2>

//       <p classNameName="mt-4 text-black">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
//         iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
//         quibusdam, quos fuga minima.
//       </p>
//     </div>

//     <div classNameName="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
//       <div classNameName="flex items-start gap-4">
//         <span classNameName="shrink-0 rounded-lg bg-white border border-black p-4">
//         <i classNameName="fa-solid fa-briefcase" style={{color: "#b24c52"}}></i>
//         </span>

//         <div>
//           <h2 classNameName="text-lg font-bold text-custom-rojo1 ">Derecho Laboral</h2>

//           <p classNameName="mt-1 text-sm text-black">
//           Asesoramiento en contratos laborales, disputas de empleo y normativas laborales complejas.
//           Asesoramiento para empleados y empleadores. 
//           </p>
//         </div>
//       </div>

//       <div classNameName="flex items-start gap-4">
//         <span classNameName="shrink-0 rounded-lg bg-custom-rojo1 p-4">
//         <i classNameName="fa-solid fa-industry"></i>
//         </span>

//         <div>
//           <h2 classNameName="text-lg font-bold text-black">Derecho comercial</h2>

//           <p classNameName="mt-1 text-sm text-black">
//           Asesoramiento legal especializado en derecho empresarial para empresas de todos los tamaños. Desde la formación de empresas hasta la resolución de disputas.
//           </p>
//         </div>
//       </div>

//       <div classNameName="flex items-start gap-4">
//         <span classNameName="shrink-0 rounded-lg bg-black p-4">
//         <svg
//             classNameName="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
//             <path
//               d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//             ></path>
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
//             ></path>
//           </svg>
//         </span>

//         <div>
//           <h2 classNameName="text-lg font-bold">Derecho de familia</h2>

//           <p classNameName="mt-1 text-sm text-black">
//           Asesoramiento y patrocinio jurídico
// en todas las áreas derivadas de las distintas formas de organización familiar. Matrimonio. Uniones convivenciales. Familias ensambladas y Familias monoparentales.
//           </p>
//         </div>
//       </div>

//       <div classNameName="flex items-start gap-4">
//         <span classNameName="shrink-0 rounded-lg bg-gray-800 p-4">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>
//         </span>

//         <div>
//           <h2 classNameName="text-lg font-bold">Lorem, ipsum dolor.</h2>

//           <p classNameName="mt-1 text-sm text-black">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>

//       <div classNameName="flex items-start gap-4">
//         <span classNameName="shrink-0 rounded-lg bg-gray-800 p-4">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>
//         </span>

//         <div>
//           <h2 classNameName="text-lg font-bold">Lorem, ipsum dolor.</h2>

//           <p classNameName="mt-1 text-sm text-black">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>

//       <div classNameName="flex items-start gap-4">
//         <span classNameName="shrink-0 rounded-lg bg-gray-800 p-4">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
//         </span>

//         <div>
//           <h2 classNameName="text-lg font-bold">Lorem, ipsum dolor.</h2>

//           <p classNameName="mt-1 text-sm text-gray-500">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
  )
}
