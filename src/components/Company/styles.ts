import styled from "styled-components"

export const CompanyLogo = styled.div`
  width: 168px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.3), rgba(223, 227, 235, 0.3)), #FFFFFF;
  
  &.active {
    background: ${({ theme }) => theme.colors.white};
  }
`