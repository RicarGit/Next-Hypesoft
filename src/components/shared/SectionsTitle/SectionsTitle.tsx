import * as S from './SectionsTitle.styles'

type SectionsTitle = {
  children: string
}

export const SectionsTitle = ({ children }: SectionsTitle) => {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
    </S.Container>
  )
}