import * as S from './styles'

type Client = {
  avatar?: string
  name: string
  occupation: string
  company: string
  className?: 'active'
}

const TestimonialClient = ({ avatar, name, occupation, company, className }: Client) => {
  return (
    <S.Client className={className}>
      {avatar ? 'e.g. set the avatar image or the image will be empty' : <S.ClientAvatar />}
      <S.ClientInfoContainer>

        <S.ClientName>
          {name}
        </S.ClientName>

        <S.ClientOccupation>
          {occupation} <span>{company}</span>
        </S.ClientOccupation>

      </S.ClientInfoContainer>
    </S.Client>
  )
}

export default TestimonialClient