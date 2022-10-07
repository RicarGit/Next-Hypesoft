import * as S from './Button.styles'

import Image from 'next/image'
import { Assets } from '~/assets'

type Button = {
  children: string
}

export const Button = ({ children }: Button) => {
  return (
    <S.Button>
      <S.ButtonText>{children}</S.ButtonText>
      <Image src={Assets.WhiteArrow} width={31} height={12} alt='white arrow' />
    </S.Button>
  )
}