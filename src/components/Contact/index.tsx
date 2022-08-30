import * as S from './styles'

import Image from 'next/image'
import sendIcon from './sendIcon.svg'
import contactLocation from './contactLocation.svg'
import contactMail from './contactMail.svg'
import contactPhone from './contactPhone.svg'
import facebook from 'components/shared/images/facebook.svg'
import behance from 'components/shared/images/behance.svg'
import dribble from 'components/shared/images/dribbble.svg'
import twitter from 'components/shared/images/twitter.svg'
import instagram from './instagram.svg'
import youtubeIcon from './youtubeIcon.png'
import horizontalPinkDots from './pink-horizontal-dots.svg'

const Contact = () => {
  return (
    <S.ContactSection id='contact'>
      <S.Container>

        <S.ContactFormContainer>
          <S.ContactFormHeading>Let me know here.</S.ContactFormHeading>

          <S.ContactForm method='POST'>
            <S.FormInput type='text' name='fullname' placeholder='Full name' required />
            <S.FormInput type='email' name='email' placeholder='Email address' required />
            <S.FormInput type='text' name='subjects' className='fullWidth' placeholder='Subjects' required />
            <S.FormTextArea placeholder='Message' />

            <S.SubmitButton type='submit'>
              Send Message
              <Image src={sendIcon} alt='submit button icon' />
            </S.SubmitButton>

          </S.ContactForm>
        </S.ContactFormContainer>

        <S.ContactInfo>
          <S.ContactInfoHeading>Get In Touch</S.ContactInfoHeading>
          <S.AddressesContainer>
            <S.AddressInfoContainer>

              <S.AddressIconWrapper>
                <Image src={contactLocation} alt='location icon' />
              </S.AddressIconWrapper>

              <S.AddressContact>
                House #5, Street Number #98,<br />
                brasilia-	70000-000, Brazil.
              </S.AddressContact>

            </S.AddressInfoContainer>
            <S.AddressInfoContainer>

              <S.AddressIconWrapper>
                <Image src={contactMail} alt='mail icon' />
              </S.AddressIconWrapper>

              <S.AddressContact>
                albert.design@gmail.com<br />
                albert.flores@gmail.com
              </S.AddressContact>

            </S.AddressInfoContainer>
            <S.AddressInfoContainer>

              <S.AddressIconWrapper>
                <Image src={contactPhone} alt='phone icon' />
              </S.AddressIconWrapper>

              <S.AddressContact>
                +55 955 258 2699<br />
                +55 955 100 9449
              </S.AddressContact>
            </S.AddressInfoContainer>

            <S.SocialMediaContainer>
              <S.SocialMediaButton>
                <Image src={dribble} alt='dribble icon' />
              </S.SocialMediaButton>

              <S.SocialMediaButton className='active'>
                <Image src={behance} alt='behance icon' />
              </S.SocialMediaButton>

              <S.SocialMediaButton>
                <Image src={facebook} alt='facebook icon' />
              </S.SocialMediaButton>

              <S.SocialMediaButton>
                <Image src={twitter} alt='twitter icon' />
              </S.SocialMediaButton>

              <S.SocialMediaButton>
                <Image src={instagram} alt='instagram icon' />
              </S.SocialMediaButton>

              <S.SocialMediaButton>
                <Image src={youtubeIcon} alt='youtube icon' />
              </S.SocialMediaButton>
            </S.SocialMediaContainer>

          </S.AddressesContainer>

          <S.pinkDotsImageWrapper>
            <Image src={horizontalPinkDots} alt='pink dots' />
          </S.pinkDotsImageWrapper>
        </S.ContactInfo>

      </S.Container>
    </S.ContactSection>
  )
}

export default Contact