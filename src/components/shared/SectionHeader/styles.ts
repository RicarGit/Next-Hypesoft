import styled from "styled-components"

export const Container = styled.div`
  width: 211px;
  height: 67px;
  margin-bottom: 50px;
`

export const Title = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    content: '';
    width: 80px;
    height: 3px;
    display: block;
    position: absolute;
    bottom: -19px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`