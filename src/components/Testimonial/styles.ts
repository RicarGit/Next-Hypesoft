import styled from "styled-components"

export const TestimonialSection = styled.section`
  width: 100%;
  position: absolute;
  top: 4661px;
  gap: 50px;
`

export const Container = styled.div`
  width: 1320px;
  height: 528px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const TestimonialContainer = styled.div`
  width: inherit;
  height: 411px;
  display: flex;
  gap: 44px;
`

export const QuoteContainer = styled.div`
  position: relative;
  width: 964px;
  height: inherit;
  padding: 50px;
  border-radius: 3px;
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.3),
    rgba(223, 227, 235, 0.3)),
    #FFFFFF;

  &::before {
    content: '';
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
    border-radius: 4px;
    transform: rotate(45deg);
    top: 38px;
    left: -15px;
    z-index: -1;
    background: linear-gradient(0deg, rgba(223, 227, 235, 0.3),
      rgba(223, 227, 235, 0.3)),
      #FFFFFF;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Quote = styled.q`
  width: 864px;
  height: 255px;
  display: block;
  padding-top: 26px;
  font-size: 32px;
  font-weight: 400;
  line-height: 51.2px;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuoteImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px;
`

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`