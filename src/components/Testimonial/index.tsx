import * as S from './styles'

import SectionHeader from 'components/shared/SectionHeader'
import Image from 'next/image'
import fullStarRating from './fullStarRating.svg'
import quote from './quote.svg'

const Testimonial = () => {
  return (
    <S.TestimonialSection>
      <S.Container>

        <SectionHeader>Testimonial</SectionHeader>
        <S.TestimonialContainer>
          <S.ClientContainer>

            <S.Client className='active'>
              <S.ClientAvatar />
              <S.ClientInfoContainer>

                <S.ClientName>
                  Sundar Pichai
                </S.ClientName>

                <S.ClientOccupation>
                  CEO & Founder of <span>Google</span>
                </S.ClientOccupation>

              </S.ClientInfoContainer>
            </S.Client>

            <S.Client>
              <S.ClientAvatar />
              <S.ClientInfoContainer>

                <S.ClientName>
                  Shantanu Narayen
                </S.ClientName>

                <S.ClientOccupation>
                  CEO of <span>Adobe</span>
                </S.ClientOccupation>

              </S.ClientInfoContainer>
            </S.Client>

            <S.Client>
              <S.ClientAvatar />
              <S.ClientInfoContainer>

                <S.ClientName>
                  Noah Levin
                </S.ClientName>

                <S.ClientOccupation>
                  Director of Design, <span>Figma</span>
                </S.ClientOccupation>

              </S.ClientInfoContainer>
            </S.Client>

            <S.Client>
              <S.ClientAvatar />
              <S.ClientInfoContainer>

                <S.ClientName>
                  Stewart Butterfield
                </S.ClientName>

                <S.ClientOccupation>
                  CEO & Founder of <span>Slack</span>
                </S.ClientOccupation>

              </S.ClientInfoContainer>
            </S.Client>

          </S.ClientContainer>
          <S.QuoteContainer>

            <S.Rating>
              <Image src={fullStarRating} />
              5.0 Star Rating
            </S.Rating>

            <S.Quote>
              If you're looking for someone who will challenge your UX/UI
              thinking and really cut to the core of what's important for users,
              then Jesse is your man. On top of that, he brings a level of
              enthusiasm to the craft that's energizing for everyone who works with him.
            </S.Quote>

            <S.QuoteImageWrapper>
              <Image src={quote} />
            </S.QuoteImageWrapper>

          </S.QuoteContainer>
        </S.TestimonialContainer>

      </S.Container>
    </S.TestimonialSection>
  )
}

export default Testimonial