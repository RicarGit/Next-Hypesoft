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
          <Image src={youtubeLogo} />
        </S.CompanyLogo>

        <S.CompanyLogo className='active'>
          <Image src={googleLogo} />
        </S.CompanyLogo>

        <S.CompanyLogo>
          <Image src={adobeLogo} />
        </S.CompanyLogo>

        <S.CompanyLogo>
          <Image src={sketchLogo} />
        </S.CompanyLogo>

        <S.CompanyLogo>
          <Image src={purpleArrow} />
        </S.CompanyLogo>

      </S.Container>
    </S.CompanyLogoSection>
  )
}

export default CompanyLogo