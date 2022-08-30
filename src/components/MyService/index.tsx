import * as S from './styles'

import Image from 'next/image'
import layersImage from './layers.svg'
import pinkBoxImage from './pink-box.svg'
import columnsImage from './columns.svg'
import codeImage from './code.svg'
import blackArrow from './black-arrow.svg'
import pinkArrow from 'components/shared/images/pink-arrow.svg'

import SectionHeader from 'components/shared/SectionHeader'

const MyService = () => {
  return (
    <S.MyServiceSection id='services'>
      <S.Container>
        <SectionHeader>My Service</SectionHeader>

        <S.CardsContainer>

          <S.Card>
            <Image src={layersImage} />
            <S.CardInfoContainer>
              <S.CardInfo>
                UI/UX <br />
                Design
              </S.CardInfo>
              <Image src={blackArrow} />
            </S.CardInfoContainer>
          </S.Card>

          <S.Card className='active'>
            <Image src={pinkBoxImage} />
            <S.CardInfoContainer>
              <S.CardInfo>
                Product <br />
                Design
              </S.CardInfo>
              <S.CardActiveWrapper>
                discuss now
                <Image src={pinkArrow} />
              </S.CardActiveWrapper>
            </S.CardInfoContainer>
          </S.Card>

          <S.Card>
            <Image src={columnsImage} />
            <S.CardInfoContainer>
              <S.CardInfo>
                Branding <br />
                Design
              </S.CardInfo>
              <Image src={blackArrow} />
            </S.CardInfoContainer>
          </S.Card>

          <S.Card>
            <Image src={codeImage} />
            <S.CardInfoContainer>
              <S.CardInfo>
                Front End <br />
                Development
              </S.CardInfo>
              <Image src={blackArrow} />
            </S.CardInfoContainer>
          </S.Card>

        </S.CardsContainer>

      </S.Container>
    </S.MyServiceSection>
  )
}

export default MyService