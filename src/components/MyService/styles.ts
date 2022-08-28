import styled from "styled-components"

export const MyServiceSection = styled.section`
  position: absolute;
  top: 1945px;
  width: 100%;
  padding-bottom: 80px;
`

export const Container = styled.div`
  width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
`

export const Card = styled.div`
  width: 312px;
  height: 351px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  border-radius: 6px;
  gap: 100px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const CardInfoContainer = styled.div`
  width: 248px;
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