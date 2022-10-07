import * as S from './ServiceCard.styled'

import Image from 'next/image'
import { Assets } from '~/assets'

type ServiceCard = {
  icon: string
  alt: string
  info1: string
  info2: string
  className?: 'active'
}

export const ServiceCard = ({ icon, alt, info1, info2, className }: ServiceCard) => {
  return (
    <S.Card className={className}>
      <Image src={icon} width={40} height={40} alt={alt} />

      <S.CardInfoContainer>
        <S.CardInfo>
          {info1}<br />
          {info2}
        </S.CardInfo>

        <S.CardActiveWrapper>
          {className && 'Discuss Now'}
          <Image
            src={className ? Assets.PinkArrow : Assets.BlackArrow}
            width={32}
            height={18}
            alt={className ? 'pink arrow' : 'black arrow'}
          />
        </S.CardActiveWrapper>
      </S.CardInfoContainer>
    </S.Card>
  )
}