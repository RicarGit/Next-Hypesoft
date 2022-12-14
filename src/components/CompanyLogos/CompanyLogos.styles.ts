import styled from "styled-components"

export const CompanyLogos = styled.section`
  width: 100%;
  margin-top: 201px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1150px) {
    justify-content: center;
    padding: 10px;
    gap: 20px;
  }
`

export const CompanyInfo = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 740px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 370px) {
    font-size: 26px;
  }
  
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

    @media (max-width: 370px) {
      width: 76px;
      height: 16px;
    }
  }
`

export const NextLogosWrapper = styled.div`
  width: 168px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(223, 227, 235, 0.3), rgba(223, 227, 235, 0.3)), #FFFFFF;
`