import styled from "styled-components"

export const AboutSection = styled.section`
  width: 100%;
  height: 795px;
  position: absolute;
  top: 1083px;
  display: flex;
`

export const Container = styled.div`
  width: 1320px;
  display: flex;
  margin: 0 auto;
  align-items: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  box-shadow: 32px 32px white;
`

export const InfoContainer = styled.div`
  width: 672px;
  height: 484px;
  display: flex;
  flex-direction: column;
  margin-left: 88px;
  gap: 23px;
`

export const InfoTitle = styled.h2`
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  color: ${({ theme }) => theme.colors.white};
`

export const InfoText = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.gray[500]};
`

export const ExperienceInfoContainer = styled.div`
  display: flex;
  width: 507px;
  height: 64px;
  gap: 50px;
`

export const ExperienceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ExperienceNumber = styled.span`
  font-size: 56px;
  line-height: 64px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const ExperienceText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`