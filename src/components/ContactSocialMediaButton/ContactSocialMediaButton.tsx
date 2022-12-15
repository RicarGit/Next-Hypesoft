import * as S from './ContactSocialMediaButton.styled'
import Image, { StaticImageData } from 'next/image'

type SocialMedia = {
  logo: string | StaticImageData
  alt: string
  className?: 'active'
}

export const ContactSocialMediaButton = ({ logo, alt, className }: SocialMedia) => {
  return (
    <S.ContactSocialMediaButton className={className}>
      <Image src={logo} width={20} height={20} alt={alt} />
    </S.ContactSocialMediaButton>
  )
}