import * as S from './MySelectedWork.styles'

import { Assets } from '~/assets'

import { SectionsTitle } from '~/components/shared/SectionsTitle'
import { WorkCard } from '~/components/WorkCard'

export const MySelectedWork = () => {
  return (
    <S.MySelectedWorkSection id='works'>
      <S.Container>
        <SectionsTitle>My Selected Work</SectionsTitle>

        <S.WorkCardContainer>
          <WorkCard workImage={Assets.MyWorksImage1} alt='work 1' >
            Eduguard - E-learning Website
          </WorkCard>

          <WorkCard workImage={Assets.MyWorksImage2} alt='work 2' className='active' >
            Eduguard - E-learning Website
          </WorkCard>

          <WorkCard workImage={Assets.MyWorksImage3} alt='work 3' >
            Huma Marketing Agency
          </WorkCard>

          <WorkCard workImage={Assets.MyWorksImage4} alt='work 4' >
            Beeryblog Blog Website
          </WorkCard>

          <WorkCard workImage={Assets.MyWorksImage5} alt='work 5' >
            Educare Elearning website
          </WorkCard>

          <WorkCard workImage={Assets.MyWorksImage6} alt='work 6' >
            Blogy Blog Website
          </WorkCard>
        </S.WorkCardContainer>
      </S.Container>
    </S.MySelectedWorkSection>
  )
}