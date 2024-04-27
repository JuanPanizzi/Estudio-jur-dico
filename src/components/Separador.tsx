import { SeparadorProps } from '../interfaces/Separador'

export const Separador: React.FC<SeparadorProps>= ({title}) => {
  
  return (
    <div className='bg-custom-gris2 h-32 text-center pt-5 '>
      <h1 className='text-4xl font-extrabold text-black pt-3 text-custom-marron1'>{title}</h1>
    </div>
  )
}
