import styled from "styled-components"

export const CompanyLogoSection = styled.section`
  width: 100%;
  height: 320px;
  position: absolute;
  top: 3740px;
  display: flex;
  align-items: center;
  padding: 100px, 300px, 100px, 300px;
`

export const Container = styled.div`
  width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
export const CompanyInfo = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.white};

  span {
    position: relative;
    color: ${({ theme }) => theme.colors.secondary};
  }

  span::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 88px;
    height: 20px;
    opacity: .15;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

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