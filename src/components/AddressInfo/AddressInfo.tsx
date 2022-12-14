import * as S from './AddressInfo.styled'
import Image from 'next/image'

type Address = {
  wayToContact: string
  info1: string
  info2: string
  alt: string
}

export const AddressInfo = ({ wayToContact, info1, info2, alt }: Address) => {
  return (
    <S.AddressInfoContainer>
      <S.AddressIconWrapper>
        <Image src={wayToContact} width={32} height={32} alt={alt} />
      </S.AddressIconWrapper>

      <S.AddressContact>
        {info1}<br />
        {info2}
      </S.AddressContact>
    </S.AddressInfoContainer>
  )
}