import * as S from './Banner.styles'

import Image from 'next/image'
import bannerShapes from './shapes.svg'

import Button from 'shared/Button'

export const Banner = () => {
  return (
    <S.BannerSection>
      <S.Container>

        <S.BannerShapesWrapper>
          <Image src={bannerShapes} alt='banner' />
        </S.BannerShapesWrapper>

        <S.BannerTitle>
          Got a project in mind? Let's make <br />
          something awesome <span>together</span>.
        </S.BannerTitle>

        <Button>Hire Me</Button>
      </S.Container>
    </S.BannerSection>
  )
}