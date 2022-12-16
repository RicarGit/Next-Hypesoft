import * as S from './Contact.styled'

import Image from 'next/image'
import { Assets } from '~/assets'

import {
  ContactSocialMediaButton,
  ContactForm,
  AddressInfo
} from '~/components'

export const Contact = () => {
  return (
    <S.ContactSection id='contact'>
      <S.ContactFormContainer>
        <S.ContactFormHeading>Let me know here.</S.ContactFormHeading>
        <ContactForm />
      </S.ContactFormContainer>

      <S.ContactInfo>
        <S.ContactInfoHeading>Get In Touch</S.ContactInfoHeading>
        <S.AddressesContainer>
          <AddressInfo
            wayToContact={Assets.ContactLocation}
            info1='House #5, Street Number #98,'
            info2='House #5, Street Number #98,'
            alt='location icon'
          />
          <AddressInfo
            wayToContact={Assets.ContactMail}
            info1='albert.design@gmail.com'
            info2='albert.flores@gmail.com'
            alt='mail icon'
          />
          <AddressInfo
            wayToContact={Assets.ContactPhone}
            info1='+55 955 258 2699'
            info2='+55 955 100 9449'
            alt='mail icon'
          />

          <S.SocialMediaContainer>
            <ContactSocialMediaButton
              logo={Assets.Dribble}
              alt='drible logo'
            />
            <ContactSocialMediaButton
              logo={Assets.Behance}
              alt='behance logo'
              className='active'
            />
            <ContactSocialMediaButton
              logo={Assets.Facebook}
              alt='facebook logo'
            />
            <ContactSocialMediaButton
              logo={Assets.Twitter}
              alt='twitter logo'
            />
            <ContactSocialMediaButton
              logo={Assets.Instagram}
              alt='instagram logo'
            />
            <ContactSocialMediaButton
              logo={Assets.YoutubeIcon}
              alt='youtube icon'
            />
          </S.SocialMediaContainer>
        </S.AddressesContainer>

        <S.pinkDotsImageWrapper>
          <Image
            src={Assets.PinkHorizontalDots}
            width={152}
            height={68}
            alt='pink dots'
          />
        </S.pinkDotsImageWrapper>
      </S.ContactInfo>
    </S.ContactSection>
  )
}