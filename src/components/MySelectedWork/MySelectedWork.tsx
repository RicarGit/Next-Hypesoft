import * as S from './MySelectedWork.styles'

import { Assets } from '~/assets'

import { SectionHeader } from '~/shared/SectionHeader'
import { WorkCard } from '~/components/WorkCard'

export const MySelectedWork = () => {
  return (
    <S.MySelectedWorkSection id='works'>
      <S.Container>
        <SectionHeader>My Selected Work</SectionHeader>
        <S.WorkCardContainer>

          <WorkCard workImage={Assets.SelectedWorkImage1} alt='work 1' >
            Eduguard - E-learning Website
          </WorkCard>

          <WorkCard workImage={Assets.SelectedWorkImage2} alt='work 2' className='active' >
            Eduguard - E-learning Website
          </WorkCard>

          <WorkCard workImage={Assets.SelectedWorkImage3} alt='work 3' >
            Huma Marketing Agency
          </WorkCard>

          <WorkCard workImage={Assets.SelectedWorkImage4} alt='work 4' >
            Beeryblog Blog Website
          </WorkCard>

          <WorkCard workImage={Assets.SelectedWorkImage5} alt='work 5' >
            Educare Elearning website
          </WorkCard>

          <WorkCard workImage={Assets.SelectedWorkImage6} alt='work 6' >
            Blogy Blog Website
          </WorkCard>

        </S.WorkCardContainer>
      </S.Container>
    </S.MySelectedWorkSection>
  )
}