import * as S from './styles'
import Image, { StaticImageData } from 'next/image'

type SocialMediaButton = {
  logo: string | StaticImageData
  alt: string
  className?: 'active'
}

const SocialMediaButton = ({ logo, alt, className }: SocialMediaButton) => {
  return (
    <S.SocialMediaButton className={className}>
      <Image src={logo} alt={alt} />
    </S.SocialMediaButton>
  )
}

export default SocialMediaButton