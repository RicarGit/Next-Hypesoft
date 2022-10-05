import * as S from './Footer.styles'

import Image from 'next/image'
import { Assets } from '~/assets'

export const Footer = () => {
  return (
    <S.Footer>
      <Image src={Assets.Hypesoft} width={263} height={59} alt='hypesoft logo' />
      <S.CreatedBy>
        Made with <span className='heart'>♥</span> by John and <span className='hypesoft'>Hypesoft</span>
      </S.CreatedBy>
    </S.Footer>
  )
}