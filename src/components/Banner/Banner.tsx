import * as S from './Banner.styles'

import Image from 'next/image'
import { Assets } from '~/assets'

import { Button } from '~/shared/Button/Button'

export const Banner = () => {
  return (
    <S.BannerSection>
      <S.Container>
        <Image src={Assets.BannerShapes} layout={'fill'} alt='banner shapes' />

        <S.BannerTitle>
          Got a project in mind? Let's make <br />
          something awesome <span>together</span>.
        </S.BannerTitle>

        <Button>Hire Me</Button>
      </S.Container>
    </S.BannerSection>
  )
}