import styled from "styled-components"

export const ContactSection = styled.section`
  width: 100%;
  margin-top: 231px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 1320px) {
    margin-top: 120px;
    justify-content: center;
  }

  @media (max-width: 800px) {
    padding: 0 10px;
  }
`

export const ContactFormContainer = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 48px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 600px) {
    align-items: center;
    padding: 30px 10px;
  }
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
  padding: 48px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 26px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 700px) {
    max-width: none;
    width: 100%;
    align-items: center;
  }

  @media (max-width: 600px) {
    align-items: center;
    padding: 30px 10px;
  }
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

  @media (max-width: 600px) {
    height: 340px;
  }

  @media (max-width: 400px) {
    height: 280px;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
  @media (max-width: 340px) {
    justify-content: center;
    gap: 6px;
  }
`

export const pinkDotsImageWrapper = styled.div`
  position: absolute;
  top: -34px;
  right: -76px;
`