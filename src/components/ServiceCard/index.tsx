import * as S from './styled'

import Image from 'next/image'
import blackArrow from './black-arrow.svg'
import pinkArrow from 'shared/images/pink-arrow.svg'

type ServiceCard = {
  icon: string
  alt: string
  info1: string
  info2: string
  className?: 'active'
}

const ServiceCard = ({ icon, alt, info1, info2, className }: ServiceCard) => {
  return (
    <S.Card className={className}>
      <Image src={icon} alt={alt} />
      <S.CardInfoContainer>

        <S.CardInfo>
          {info1} <br />
          {info2}
        </S.CardInfo>

        <S.CardActiveWrapper>
          {className && 'Discuss Now'}
          <Image
            src={className ? pinkArrow : blackArrow}
            alt={className ? 'pink arrow' : 'black arrow'}
          />
        </S.CardActiveWrapper>

      </S.CardInfoContainer>
    </S.Card>
  )
}

export default ServiceCard