import styled from "styled-components"

export const ContactSection = styled.section`
  width: 100%;
  margin-top: 231px;
  display: flex;
`

export const Container = styled.div`
  width: 1320px;
  height: 536px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
`

export const ContactFormContainer = styled.div`
  width: 760px;
  height: 536px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 48px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const ContactFormHeading = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.primary};
`

export const ContactInfo = styled.div`
  position: relative;
  width: 536px;
  height: 536px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 26px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const ContactInfoHeading = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.primary};
`

export const AddressesContainer = styled.address`
  height: 376px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SocialMediaContainer = styled.div`
  height: 60px;
  display: flex;
  gap: 12px;
`

export const pinkDotsImageWrapper = styled.div`
  position: absolute;
  top: -34px;
  right: -76px;
`