import styled from "styled-components"

export const BannerSection = styled.section`
  width: 100%;
  position: absolute;
  top: 4126px;
  padding: 64px;
`

export const Container = styled.div`
  width: 1320px;
  height: 184px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  button {
    width: auto;
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
`