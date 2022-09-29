import * as S from './HeaderSocialMediaButton.styles'
import Image from 'next/image'

type Props = {
  icon: string
  className?: string
}

export const HeaderSocialMediaButton = ({ icon, className }: Props) => {
  return (
    <S.FollowMeButtonWrapper className={className}>
      <Image src={icon} alt='social media icon' />
    </S.FollowMeButtonWrapper>
  )
}