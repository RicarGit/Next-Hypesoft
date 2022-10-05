import * as S from './HeaderSocialMediaButton.styles'
import Image from 'next/image'

type Props = {
  icon: string
  className?: string
  alt: string
}

export const HeaderSocialMediaButton = ({ icon, className, alt }: Props) => {
  return (
    <S.FollowMeButtonWrapper className={className}>
      <Image src={icon} width={20} height={20} alt={alt} />
    </S.FollowMeButtonWrapper>
  )
}