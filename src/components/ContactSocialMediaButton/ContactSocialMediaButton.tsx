import * as S from './ContactSocialMediaButton.styles'
import Image, { StaticImageData } from 'next/image'

type SocialMediaButton = {
  logo: string | StaticImageData
  alt: string
  className?: 'active'
}

export const ContactSocialMediaButton = ({ logo, alt, className }: SocialMediaButton) => {
  return (
    <S.ContactSocialMediaButton className={className}>
      <Image src={logo} alt={alt} />
    </S.ContactSocialMediaButton>
  )
}