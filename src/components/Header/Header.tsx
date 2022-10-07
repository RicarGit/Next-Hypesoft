import * as S from './Header.styles'

import Image from 'next/image'
import { Assets } from '~/assets'

import { Navbar } from '~/components/Navbar'
import { HeaderSocialMediaButton } from '~/components/HeaderSocialMediaButton'

export const Header = () => {
  return (
    <S.Header>
      <Navbar />

      <S.Container>
        <S.ImageContainer>
          <S.ImageBg />

          <Image
            src={Assets.PersonalPhoto}
            width={870}
            height={974}
            alt='personal photo'
            priority
          />
          <S.DotImageWrapper>
            <Image
              src={Assets.DarkVerticalDots}
              width={68}
              height={152}
              alt='dark vertical dots'
            />
          </S.DotImageWrapper>
        </S.ImageContainer>

        <S.HeroContainer>
          <S.HeroTitle>
            Hello, I’m John, a <span>Software Engineer.</span>
          </S.HeroTitle>

          <S.HeroDesc>
            Product Designer, UI/UX Designer, and developer based in Brazil.
            Over the past 17 years, as an art director and designer,
            I’ve worked with big companies and up-and-coming startups.
          </S.HeroDesc>

          <S.HeroButtonsWrapper>
            <S.HeroButton className='active'>
              Hire me
            </S.HeroButton>

            <S.HeroButton>
              View work
            </S.HeroButton>
          </S.HeroButtonsWrapper>
        </S.HeroContainer>

        <S.FollowMeOn>
          Follow me on
          <S.FollowMeButtonsContainer>
            <HeaderSocialMediaButton
              icon={Assets.Dribble}
              alt='dribble logo'
            />
            <HeaderSocialMediaButton
              icon={Assets.Behance}
              alt='behance logo'
              className='active'
            />
            <HeaderSocialMediaButton
              icon={Assets.Facebook}
              alt='facebook logo'
            />
            <HeaderSocialMediaButton
              icon={Assets.Twitter}
              alt='twitter logo'
            />
          </S.FollowMeButtonsContainer>
        </S.FollowMeOn>
      </S.Container>
    </S.Header>
  )
}