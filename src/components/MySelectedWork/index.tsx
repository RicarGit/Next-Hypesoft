import * as S from './styles'

import Image from 'next/image'
import pinkRightArrow from 'components/shared/images/pink-arrow.svg'
import selectedWorkImage1 from './selected_work_image1.svg'
import selectedWorkImage2 from './selected_work_image2.svg'
import selectedWorkImage3 from './selected_work_image3.svg'
import selectedWorkImage4 from './selected_work_image4.svg'
import selectedWorkImage5 from './selected_work_image5.svg'
import selectedWorkImage6 from './selected_work_image6.svg'

import SectionHeader from 'components/shared/SectionHeader'

const MySelectedWork = () => {
  return (
    <S.MySelectedWorkSection id='works'>
      <S.Container>
        <SectionHeader>My Selected Work</SectionHeader>
        <S.WorkCardContainer>

          <S.WorkCard>
            <Image src={selectedWorkImage1} width={424} height={332} alt='work 1' />
            <S.WorkCardInfo>
              <S.WorkCardInfoTitle>
                Eduguard - E-learning Website
              </S.WorkCardInfoTitle>
              <Image src={pinkRightArrow} alt='pink arrow' />
            </S.WorkCardInfo>
          </S.WorkCard>

          <S.WorkCard>
            <Image src={selectedWorkImage2} width={424} height={332} alt='work 2' />
            <S.WorkCardInfo>
              <S.WorkCardInfoTitle>
                Eduguard - E-learning Website
              </S.WorkCardInfoTitle>
              <Image src={pinkRightArrow} alt='pink arrow' />
            </S.WorkCardInfo>
          </S.WorkCard>

          <S.WorkCard>
            <Image src={selectedWorkImage3} width={424} height={332} alt='work 3' />
            <S.WorkCardInfo>
              <S.WorkCardInfoTitle>
                Huma Marketing Agency
              </S.WorkCardInfoTitle>
              <Image src={pinkRightArrow} alt='pink arrow' />
            </S.WorkCardInfo>
          </S.WorkCard>

          <S.WorkCard>
            <Image src={selectedWorkImage4} width={424} height={332} alt='work 4' />
            <S.WorkCardInfo>
              <S.WorkCardInfoTitle>
                Beeryblog Blog Website
              </S.WorkCardInfoTitle>
              <Image src={pinkRightArrow} alt='pink arrow' />
            </S.WorkCardInfo>
          </S.WorkCard>

          <S.WorkCard>
            <Image src={selectedWorkImage5} width={424} height={332} alt='work 5' />
            <S.WorkCardInfo>
              <S.WorkCardInfoTitle>
                Educare Elearning website
              </S.WorkCardInfoTitle>
              <S.WorkPinkArrowWrapper>
                View Project
                <Image src={pinkRightArrow} alt='pink arrow' />
              </S.WorkPinkArrowWrapper>
            </S.WorkCardInfo>
          </S.WorkCard>

          <S.WorkCard>
            <Image src={selectedWorkImage6} width={424} height={332} />
            <S.WorkCardInfo>
              <S.WorkCardInfoTitle>
                Blogy Blog Website
              </S.WorkCardInfoTitle>
              <Image src={pinkRightArrow} />
            </S.WorkCardInfo>
          </S.WorkCard>

        </S.WorkCardContainer>
      </S.Container>
    </S.MySelectedWorkSection>
  )
}

export default MySelectedWork