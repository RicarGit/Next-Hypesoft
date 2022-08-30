import * as S from './styles'

import Image from 'next/image'
import youtubeLogo from './youtube.svg'
import googleLogo from './google.svg'
import adobeLogo from './adobe.svg'
import sketchLogo from './sketch.svg'
import purpleArrow from './purple-arrow.svg'

const CompanyLogo = () => {
  return (
    <S.CompanyLogoSection>
      <S.Container>

        <S.CompanyInfo>
          I worked with <span>289+</span><br />
          Companies all over <br />
          the World.
        </S.CompanyInfo>

        <S.CompanyLogo>
          <Image src={youtubeLogo} alt='youtube logo' />
        </S.CompanyLogo>

        <S.CompanyLogo className='active'>
          <Image src={googleLogo} alt='google logo' />
        </S.CompanyLogo>

        <S.CompanyLogo>
          <Image src={adobeLogo} alt='adobe logo' />
        </S.CompanyLogo>

        <S.CompanyLogo>
          <Image src={sketchLogo} alt='sketch logo' />
        </S.CompanyLogo>

        <S.CompanyLogo>
          <Image src={purpleArrow} alt='purple arrow' />
        </S.CompanyLogo>

      </S.Container>
    </S.CompanyLogoSection>
  )
}

export default CompanyLogo