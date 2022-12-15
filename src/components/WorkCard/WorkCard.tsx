import * as S from './WorkCard.styled'

import Image from 'next/image'
import { Assets } from '~/assets'

type WorkCard = {
  workImage: string
  alt: string
  children: string
  className?: 'active'
}

export const WorkCard = ({ workImage, alt, children, className }: WorkCard) => {
  return (
    <S.WorkCard>
      <Image src={workImage} width={424} height={332} alt={alt} />

      <S.WorkCardInfo>
        <S.WorkCardInfoTitle>
          {children}
        </S.WorkCardInfoTitle>

        <S.WorkPinkArrowWrapper>
          {className && 'View Project'}
          <Image src={Assets.PinkArrow} width={32} height={18} alt='pink arrow' />
        </S.WorkPinkArrowWrapper>
      </S.WorkCardInfo>
    </S.WorkCard>
  )
}