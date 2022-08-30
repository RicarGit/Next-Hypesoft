import * as S from './styles'
import Image from 'next/image'

type Props = {
  icon: string
  className?: string
}

const HeaderSocialMediaButton = ({ icon, className }: Props) => {
  return (
    <S.FollowMeButtonWrapper className={className}>
      <Image src={icon} />
    </S.FollowMeButtonWrapper>
  )
}

export default HeaderSocialMediaButton