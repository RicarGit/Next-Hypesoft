import * as S from './Banner.styles'

import Image from 'next/image'
import { Assets } from '~/assets'

import { Button } from '~/components/shared/Button'

export const Banner = () => {
  return (
    <S.BannerSection>
      <S.BannerTitle>
        Got a project in mind? Let's make<br />
        something awesome <span>together</span>.
      </S.BannerTitle>

      <Button>Hire Me</Button>
    </S.BannerSection>
  )
}