import * as S from './About.styles'

import Image from 'next/image'
import { Assets } from '~/assets'

import { Button } from '~/shared/Button'

export const About = () => {
  return (
    <S.AboutSection id='about'>
      <S.Container>

        <S.ImageWrapper>
          <Image src={Assets.AboutImage} width={560} height={542} alt='about' />
        </S.ImageWrapper>

        <S.InfoContainer>
          <S.InfoTitle>
            Software Engineer and Infrastructure specialist based in Brazil.
          </S.InfoTitle>

          <S.InfoText>
            Morbi quam velit, euismod in imperdiet vitae, elementum et elit.
            Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor.
            Nunc in volutpat ipsum, molestie commodo odio.
            Quisque auctor nisi mi. Aenean venenatis sapien et interdum interdum.
          </S.InfoText>

          <S.ExperienceInfoContainer>

            <S.ExperienceWrapper>
              <S.ExperienceNumber>17+</S.ExperienceNumber>
              <S.ExperienceText>Years of Experience</S.ExperienceText>
            </S.ExperienceWrapper>

            <S.ExperienceWrapper>
              <S.ExperienceNumber>325+</S.ExperienceNumber>
              <S.ExperienceText>Completed Projects</S.ExperienceText>
            </S.ExperienceWrapper>

          </S.ExperienceInfoContainer>

          <Button>Say Hi</Button>
        </S.InfoContainer>

      </S.Container>
    </S.AboutSection>
  )
}