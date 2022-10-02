import * as S from './MyService.styles'

import layersIcon from './layers.svg'
import pinkBoxIcon from './pink-box.svg'
import columnsIcon from './columns.svg'
import codeIcon from './code.svg'

import { SectionHeader } from '~/shared/SectionHeader/SectionHeader'
import { ServiceCard } from '~/components/ServiceCard'

export const MyService = () => {
  return (
    <S.MyServiceSection id='services'>
      <S.Container>
        <SectionHeader>My Service</SectionHeader>
        <S.CardsContainer>

          <ServiceCard
            icon={layersIcon}
            info1='UI/UX'
            info2='Design'
            alt='layers icon'
          />

          <ServiceCard
            icon={pinkBoxIcon}
            info1='Product'
            info2='Design'
            alt='pink box icon' className='active'
          />

          <ServiceCard
            icon={columnsIcon}
            info1='Branding'
            info2='Design'
            alt='columns icon'
          />

          <ServiceCard
            icon={codeIcon}
            info1='Front End'
            info2='Development'
            alt='code icon'
          />

        </S.CardsContainer>
      </S.Container>
    </S.MyServiceSection>
  )
}