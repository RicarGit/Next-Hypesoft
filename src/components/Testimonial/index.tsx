import * as S from './styles'

import Image from 'next/image'
import fullStarRating from './fullStarRating.svg'
import quote from './quote.svg'

import SectionHeader from 'components/shared/SectionHeader'
import TestimonialClient from 'components/TestimonialClient'

const Testimonial = () => {
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
              <Image src={fullStarRating} alt='full star rating' />
              5.0 Star Rating
            </S.Rating>

            <S.Quote>
              If you're looking for someone who will challenge your UX/UI
              thinking and really cut to the core of what's important for users,
              then Jesse is your man. On top of that, he brings a level of
              enthusiasm to the craft that's energizing for everyone who works with him.
            </S.Quote>

            <S.QuoteImageWrapper>
              <Image src={quote} alt='big quotes' />
            </S.QuoteImageWrapper>

          </S.QuoteContainer>
        </S.TestimonialContainer>

      </S.Container>
    </S.TestimonialSection>
  )
}

export default Testimonial