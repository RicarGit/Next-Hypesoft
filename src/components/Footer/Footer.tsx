import * as S from './Footer.styles'

import Image from 'next/image'
import hypesoft from './hypesoft.svg'

export const Footer = () => {
  return (
    <S.Footer>
      <Image src={hypesoft} alt='hypesoft logo' />
      <S.CreatedBy>
        Made with <span className='heart'>♥</span> by John and <span className='hypesoft'>Hypesoft</span>
      </S.CreatedBy>
    </S.Footer>
  )
}