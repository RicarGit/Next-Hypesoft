import * as S from './Testimonial.styles'

import Image from 'next/image'
import { Assets } from '~/assets'

import { SectionHeader } from '~/shared/SectionHeader'
import { TestimonialClient } from '~/components/TestimonialClient'

export const Testimonial = () => {
  return (
    <S.TestimonialSection>
      <S.Container>
        <SectionHeader>Testimonial</SectionHeader>

        <S.TestimonialContainer>
          <S.ClientContainer>
            <TestimonialClient
              name='Sundar Pichai'
              occupation='CEO & Founder of'
              company='Google'
              className='active'
            />
            <TestimonialClient
              name='Shantanu Narayen'
              occupation='CEO of'
              company='Adobe'
            />
            <TestimonialClient
              name='Noah Levin'
              occupation='Director of Design,'
              company='Figma'
            />
            <TestimonialClient
              name='Stewart Butterfield'
              occupation='CEO & Founder of'
              company='Slack'
            />
          </S.ClientContainer>

          <S.QuoteContainer>
            <S.Rating>
              <Image src={Assets.FullStarRating} width={32} height={32} alt='full star' />
              5.0 Star Rating
            </S.Rating>

            <S.Quote>
              If you're looking for someone who will challenge your UX/UI
              thinking and really cut to the core of what's important for users,
              then Jesse is your man. On top of that, he brings a level of
              enthusiasm to the craft that's energizing for everyone who works with him.
            </S.Quote>

            <S.QuoteImageWrapper>
              <Image src={Assets.Quote} width={96} height={76} alt='big quote' />
            </S.QuoteImageWrapper>
          </S.QuoteContainer>
        </S.TestimonialContainer>
      </S.Container>
    </S.TestimonialSection>
  )
}