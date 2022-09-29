import * as S from './Company.styles'
import Image from 'next/image'

type Logo = {
  logo: string
  alt: string
  className?: string
}

export const Company = ({ logo, alt, className }: Logo) => {
  return (
    <S.CompanyLogo className={className}>
      <Image src={logo} alt={alt} />
    </S.CompanyLogo>
  )
}