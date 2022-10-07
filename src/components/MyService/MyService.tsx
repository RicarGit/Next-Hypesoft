import * as S from './MyService.styles'

import { Assets } from '~/assets'

import { SectionsTitle } from '~/components/shared/SectionsTitle'
import { ServiceCard } from '~/components/ServiceCard'

export const MyService = () => {
  return (
    <S.MyServiceSection id='services'>
      <S.Container>
        <SectionsTitle>My Service</SectionsTitle>

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