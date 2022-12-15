import styled from "styled-components"

export const BannerSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 166px;
  padding: 64px 10px;
  gap: 32px;
  background-image: url('banner-shapes.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  
  button {
    width: auto;
  }

  @media (max-width: 530px) {
    padding: 20px 10px;
    text-align: center;
  }
`

export const BannerTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 530px) {
    font-size: 26px;
    line-height: 36px;
  }
`