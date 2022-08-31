import * as S from './styles'

import Image from 'next/image'
import contactLocation from './contactLocation.svg'
import contactMail from './contactMail.svg'
import contactPhone from './contactPhone.svg'
import facebook from 'shared/images/facebook.svg'
import behance from 'shared/images/behance.svg'
import dribble from 'shared/images/dribbble.svg'
import twitter from 'shared/images/twitter.svg'
import instagram from './instagram.svg'
import youtubeIcon from './youtubeIcon.png'
import horizontalPinkDots from './pink-horizontal-dots.svg'
import SocialMediaButton from 'components/ContactSocialMediaButton'
import ContactForm from 'components/ContactForm'
import AddressInfo from 'components/AddressInfo'

const Contact = () => {
  return (
    <S.ContactSection id='contact'>
      <S.Container>

        <S.ContactFormContainer>
          <S.ContactFormHeading>Let me know here.</S.ContactFormHeading>

          <ContactForm />

        </S.ContactFormContainer>

        <S.ContactInfo>
          <S.ContactInfoHeading>Get In Touch</S.ContactInfoHeading>
          <S.AddressesContainer>

            <AddressInfo
              wayToContact={contactLocation}
              info1='House #5, Street Number #98,'
              info2='House #5, Street Number #98,'
              alt='location icon'
            />

            <AddressInfo
              wayToContact={contactMail}
              info1='albert.design@gmail.com'
              info2='albert.flores@gmail.com'
              alt='mail icon'
            />

            <AddressInfo
              wayToContact={contactPhone}
              info1='+55 955 258 2699'
              info2='+55 955 100 9449'
              alt='mail icon'
            />

            <S.SocialMediaContainer>

              <SocialMediaButton logo={dribble} alt='drible logo' />
              <SocialMediaButton logo={behance} alt='behance logo' className='active' />
              <SocialMediaButton logo={facebook} alt='facebook logo' />
              <SocialMediaButton logo={twitter} alt='twitter logo' />
              <SocialMediaButton logo={instagram} alt='instagram logo' />
              <SocialMediaButton logo={youtubeIcon} alt='youtube icon' />

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