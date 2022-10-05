import * as S from './Company.styles'
import Image from 'next/image'

type CompanyLogo = {
  logo: string
  alt: string
  className?: string
}

export const Company = ({ logo, alt, className }: CompanyLogo) => {
  return (
    <S.CompanyLogo className={className}>
      <Image src={logo} width={110} height={100} alt={alt} />
    </S.CompanyLogo>
  )
}