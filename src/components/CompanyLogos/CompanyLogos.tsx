import * as S from './CompanyLogos.styled'

import Image from 'next/image'
import { Assets } from '~/assets'

import { Company } from '~/components/Company'

export const CompanyLogo = () => {
  return (
    <S.CompanyLogos>
      <S.CompanyInfo>
        I worked with <span>289+</span><br />
        Companies all over<br />
        the World.
      </S.CompanyInfo>

      <Company logo={Assets.Youtube} alt='youtube logo' />
      <Company logo={Assets.Google} alt='google logo' className='active' />
      <Company logo={Assets.Adobe} alt='adobe logo' />
      <Company logo={Assets.Sketch} alt='sketch logo' />

      <S.NextLogosWrapper>
        <Image src={Assets.PurpleArrow} width={32} height={20} />
      </S.NextLogosWrapper>
    </S.CompanyLogos>
  )
}