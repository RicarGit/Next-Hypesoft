import * as S from './styles'

import Image from 'next/image'
import whiteArrow from "./white-arrow.svg"

type Button = {
  children: string
}

const Button = ({ children }: Button) => {
  return (
    <S.Container>
      <S.Label>{children}</S.Label>
      <Image src={whiteArrow} alt='white arrow' />
    </S.Container>
  )
}

export default Button