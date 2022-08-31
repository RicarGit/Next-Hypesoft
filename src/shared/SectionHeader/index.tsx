import * as S from './styles'

type SectionHeader = {
  children: string
}

const SectionHeader = ({ children }: SectionHeader) => {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
    </S.Container>
  )
}

export default SectionHeader