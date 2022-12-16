import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  margin-top: 157px;
  margin-bottom: 172px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 600px) {
    margin: 100px 0;
  }
`

export const CreatedBy = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[500]};

  span.heart {
    color: ${({ theme }) => theme.colors.secondary};
  }

  span.hypesoft {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.sec};
  }
`