import styled, { css } from "styled-components"

export const Header = styled.header`
  height: 1080px;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 1320px;
  margin: 0 auto;
`

export const ImageContainer = styled.div`
  position: absolute;
  height: 1080px;
  width: 1053px;
  padding-top: 106px;
  top: 0;
  right: 0;
  z-index: -1;
`

export const ImageBg = styled.div`
  position: absolute;
  height: inherit;
  width: 724px;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.sec};
`

export const DotImageWrapper = styled.div`
  position: absolute;
  top: 417px;
  right: 325px;
`

export const HeroContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 758px;
  height: 412px;
  top: 334px;
`

export const HeroTitle = styled.h1`${({ theme }) => css`
  position: relative;
  color: ${theme.colors.white};
  font-family: ${theme.font.family};
  font-size: 80px;
  font-weight: 400;
  line-height: 98px;

  & span {
    color: ${theme.colors.sec}
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 8px;
    left: 15px;
    height: 36px;
    width: 594px;
    background-color: ${({ theme }) => theme.colors.sec};
    opacity: 0.15;
  }
`}
`

export const HeroDesc = styled.p`
  width: 673px;
  margin-top: 32px;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.gray[500]};
`

export const HeroButtonsWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 16px;
`

export const HeroButton = styled.button`
  padding: 0 32px;
  font-size: 16px;
  line-height: 56px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.sec};
  }
`

export const FollowMeOn = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 228px;
  height: 84px;
  top: 948px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 24px;
`

export const FollowMeButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`