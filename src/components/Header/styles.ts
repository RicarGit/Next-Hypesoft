import styled, { css } from "styled-components"

export const Header = styled.header`
  height: 100%;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

type ButtonColors = {
  buttonColors: {
    color: string
    bgColor: string
  }
}

export const HeroButton = styled.button<ButtonColors>`
  ${({ theme, buttonColors: { color, bgColor } }) => css`
    padding: 0 32px;
    font-size: 16px;
    line-height: 56px;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    color: ${color};
    background-color: ${bgColor === 'white' ? theme.colors.white : theme.colors.sec};
    cursor: pointer;
  `}
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

export const FollowMeButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`

type BgFollowMeButton = {
  bgColor: string
}

export const FollowMeButton = styled.button<BgFollowMeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme, bgColor }) => bgColor === 'white'
    ? theme.colors.white
    : theme.colors.sec
  };
`