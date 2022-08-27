import * as S from './styles'
import Navbar from '../Navbar'

import Image from 'next/image'
import headerImage from './header-Image.svg'
import facebook from './facebook.svg'
import behance from './behance.svg'
import dribble from './dribbble.svg'
import twitter from './twitter.svg'
import darkVerticalDots from './dark-vertical-dots.svg'

const Header = () => {
  return (
    <S.Header>

      <Navbar />
      <S.Container>

        <S.ImageContainer>

          <S.ImageBg />
          <Image src={headerImage} />

          <S.DotImageWrapper>
            <Image src={darkVerticalDots} className={'darkVerticalDots'} />
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

            <S.HeroButton buttonColors={{ color: 'white', bgColor: 'sec' }}>
              Hire me
            </S.HeroButton>
            <S.HeroButton buttonColors={{ color: 'primary', bgColor: 'white' }}>
              View work
            </S.HeroButton>

          </S.HeroButtonsWrapper>

        </S.HeroContainer>

        <S.FollowMeOn>
          Follow me on
          <S.FollowMeButtonWrapper>

            <S.FollowMeButton bgColor={'white'}>
              <Image src={dribble} />
            </S.FollowMeButton>

            <S.FollowMeButton bgColor={'sec'}>
              <Image src={behance} />
            </S.FollowMeButton>

            <S.FollowMeButton bgColor={'white'}>
              <Image src={facebook} />
            </S.FollowMeButton>

            <S.FollowMeButton bgColor={'white'}>
              <Image src={twitter} />
            </S.FollowMeButton>

          </S.FollowMeButtonWrapper>

        </S.FollowMeOn>

      </S.Container>

    </S.Header>
  )
}

export default Header