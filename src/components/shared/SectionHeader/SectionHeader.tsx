import * as S from './SectionHeader.styles'

type SectionHeader = {
  children: string
}

export const SectionHeader = ({ children }: SectionHeader) => {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
    </S.Container>
  )
}