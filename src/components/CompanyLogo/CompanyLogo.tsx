import * as S from './styles'

import youtubeLogo from './youtube.svg'
import googleLogo from './google.svg'
import adobeLogo from './adobe.svg'
import sketchLogo from './sketch.svg'
import purpleArrow from './purple-arrow.svg'

import { Company } from 'components/Company'

export const CompanyLogo = () => {
  return (
    <S.CompanyLogoSection>
      <S.Container>

        <S.CompanyInfo>
          I worked with <span>289+</span><br />
          Companies all over <br />
          the World.
        </S.CompanyInfo>

        <Company logo={youtubeLogo} alt='youtube logo' />
        <Company logo={googleLogo} alt='google logo' className='active' />
        <Company logo={adobeLogo} alt='adobe logo' />
        <Company logo={sketchLogo} alt='sketch logo' />
        <Company logo={purpleArrow} alt='purple arrow' />

      </S.Container>
    </S.CompanyLogoSection>
  )
}