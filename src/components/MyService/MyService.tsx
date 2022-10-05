import * as S from './MyService.styles'

import { Assets } from '~/assets'

import { SectionHeader } from '~/shared/SectionHeader'
import { ServiceCard } from '~/components/ServiceCard'

export const MyService = () => {
  return (
    <S.MyServiceSection id='services'>
      <S.Container>
        <SectionHeader>My Service</SectionHeader>
        <S.CardsContainer>

          <ServiceCard
            icon={Assets.LayersIcon}
            info1='UI/UX'
            info2='Design'
            alt='layers icon'
          />

          <ServiceCard
            icon={Assets.PinkBoxIcon}
            info1='Product'
            info2='Design'
            alt='pink box icon' className='active'
          />

          <ServiceCard
            icon={Assets.ColumnsIcon}
            info1='Branding'
            info2='Design'
            alt='columns icon'
          />

          <ServiceCard
            icon={Assets.CodeIcon}
            info1='Front End'
            info2='Development'
            alt='code icon'
          />

        </S.CardsContainer>
      </S.Container>
    </S.MyServiceSection>
  )
}