import styled from "styled-components"

export const MySelectedWorkSection = styled.section`
  width: 100%;
  height: 1247px;
  position: absolute;
  top: 2493px;
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WorkCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`

export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 424px;
  height: 452px;
  border-radius: 6px 6px 0 0;
`

export const WorkCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  border-radius: 0 0 8px 8px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const WorkCardInfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.primary};
`

export const WorkPinkArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  gap: 10.6px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.secondary};
`