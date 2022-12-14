import * as S from './Company.styles'
import Image from 'next/image'

type Company = {
  logo: string
  alt: string
  className?: string
}

export const Company = ({ logo, alt, className }: Company) => {
  return (
    <S.Company className={className}>
      <Image src={logo} width={110} height={100} alt={alt} />
    </S.Company>
  )
}