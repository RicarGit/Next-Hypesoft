import styled from "styled-components"

export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 424px;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
`

export const WorkCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 0 0 8px 8px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 430px) {
    padding: 14px;
  }
`

export const WorkCardInfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.primary};
`

export const WorkPinkArrowWrapper = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  gap: 10.6px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.secondary};
`