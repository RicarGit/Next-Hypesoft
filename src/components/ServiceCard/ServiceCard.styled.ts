import styled from "styled-components"

export const Card = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  border-radius: 6px;
  gap: 100px;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.4),
   rgba(223, 227, 235, 0.4)), #FFFFFF;

  &.active {
    background: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 340px) {
    padding: 22px;
    gap: 80px;
  }
`

export const CardInfoContainer = styled.div`
  height: 147px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const CardInfo = styled.h2`
  position: relative;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;

  &::before {
    content: '';
    position: absolute;
    bottom: -16px;
    width: 64px;
    height: 3px;
    opacity: 30%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 340px) {
    font-size: 28px;
  }
`

export const CardActiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  gap: 8px;
  color: ${({ theme }) => theme.colors.secondary};
`