import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 172px;
  top: 6113px;
  gap: 24px;
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