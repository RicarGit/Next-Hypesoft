import styled from "styled-components"

export const Container = styled.button`
  width: 162px;
  display: flex;
  justify-content: center;
  padding: 0 32px;
  border: none;
  border-radius: 4px;
  gap: 8px;
  cursor: pointer;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.sec};
`

export const Label = styled.p`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`