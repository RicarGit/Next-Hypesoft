import * as S from './styles'

import selectedWorkImage1 from './selected_work_image1.svg'
import selectedWorkImage2 from './selected_work_image2.svg'
import selectedWorkImage3 from './selected_work_image3.svg'
import selectedWorkImage4 from './selected_work_image4.svg'
import selectedWorkImage5 from './selected_work_image5.svg'
import selectedWorkImage6 from './selected_work_image6.svg'

import SectionHeader from 'shared/SectionHeader'
import WorkCard from 'components/WorkCard'

const MySelectedWork = () => {
  return (
    <S.MySelectedWorkSection id='works'>
      <S.Container>
        <SectionHeader>My Selected Work</SectionHeader>
        <S.WorkCardContainer>

          <WorkCard workImage={selectedWorkImage1} alt='work 1' >
            Eduguard - E-learning Website
          </WorkCard>

          <WorkCard workImage={selectedWorkImage2} alt='work 2' className='active' >
            Eduguard - E-learning Website
          </WorkCard>

          <WorkCard workImage={selectedWorkImage3} alt='work 3' >
            Huma Marketing Agency
          </WorkCard>

          <WorkCard workImage={selectedWorkImage4} alt='work 4' >
            Beeryblog Blog Website
          </WorkCard>

          <WorkCard workImage={selectedWorkImage5} alt='work 5' >
            Educare Elearning website
          </WorkCard>

          <WorkCard workImage={selectedWorkImage6} alt='work 6' >
            Blogy Blog Website
          </WorkCard>

        </S.WorkCardContainer>
      </S.Container>
    </S.MySelectedWorkSection>
  )
}

export default MySelectedWork