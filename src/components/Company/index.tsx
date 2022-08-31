import * as S from './styles'
import Image from 'next/image'

type Logo = {
  logo: string
  alt: string
  className?: string
}

const Company = ({ logo, alt, className }: Logo) => {
  return (
    <S.CompanyLogo className={className}>
      <Image src={logo} alt={alt} />
    </S.CompanyLogo>
  )
}

export default Company