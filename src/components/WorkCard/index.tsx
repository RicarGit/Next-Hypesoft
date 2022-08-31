import * as S from './styles'

import Image from 'next/image'
import pinkArrow from 'shared/images/pink-arrow.svg'

type WorkCard = {
  workImage: string
  alt: string
  children: string
  className?: 'active'
}

const WorkCard = ({ workImage, alt, children, className }: WorkCard) => {
  return (
    <S.WorkCard>
      <Image src={workImage} width={424} height={332} alt={alt} />
      <S.WorkCardInfo>

        <S.WorkCardInfoTitle>
          {children}
        </S.WorkCardInfoTitle>

        <S.WorkPinkArrowWrapper>
          {className && 'View Project'}
          <Image src={pinkArrow} alt='pink arrow' />
        </S.WorkPinkArrowWrapper>

      </S.WorkCardInfo>
    </S.WorkCard>
  )
}

export default WorkCard