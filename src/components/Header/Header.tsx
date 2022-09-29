import * as S from './Header.styles'

import Image from 'next/image'
import headerImage from './header-Image.svg'
import facebook from 'shared/images/facebook.svg'
import behance from 'shared/images/behance.svg'
import dribble from 'shared/images/dribbble.svg'
import twitter from 'shared/images/twitter.svg'
import darkVerticalDots from './dark-vertical-dots.svg'

import { Navbar } from '~/components/Navbar'
import { HeaderSocialMediaButton } from '~/components/HeaderSocialMediaButton'

export const Header = () => {
  return (
    <S.Header>

      <Navbar />
      <S.Container>
        <S.ImageContainer>

          <S.ImageBg />
          <Image src={headerImage} alt='personal image' />

          <S.DotImageWrapper>
            <Image src={darkVerticalDots} className={'darkVerticalDots'} alt='dark vertical dots' />
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

            <HeaderSocialMediaButton icon={dribble} />
            <HeaderSocialMediaButton icon={behance} className='active' />
            <HeaderSocialMediaButton icon={facebook} />
            <HeaderSocialMediaButton icon={twitter} />

          </S.FollowMeButtonsContainer>
        </S.FollowMeOn>
      </S.Container>
    </S.Header>
  )
}