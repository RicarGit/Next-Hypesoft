import * as S from './styles'

import Image from 'next/image'
import hypesoft from './hypesoft.svg'

const Footer = () => {
  return (
    <S.Footer>
      <Image src={hypesoft} />
      <S.CreatedBy>
        Made with <span className='heart'>♥</span> by John and <span className='hypesoft'>Hypesoft</span>
      </S.CreatedBy>
    </S.Footer>
  )
}

export default Footer