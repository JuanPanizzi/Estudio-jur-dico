import { SeparadorProps } from '../interfaces/Separador'

export const Separador = ({title}: SeparadorProps) => {
  
  return (
    <div className={ `bg-custom-gris2  text-center ${title == 'CONTACTO' ? ' pt-20 h-48' : '  h-32 pt-5' }`}>
      <h1 className='text-4xl font-extrabold text-black pt-3 text-custom-marron1'>{title}</h1>
    </div>
  )
}
