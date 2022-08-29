import styled from "styled-components"

export const ContactSection = styled.section`
  width: 100%;
  height: 744px;
  position: absolute;
  display: flex;
  align-items: center;
  top: 5316px;
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

export const ContactForm = styled.form`
  width: 664px;
  height: 288px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const FormInput = styled.input`
  height: 52px;
  width: 324px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border-radius: 4px;
  padding: 24px;
  outline: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};

  &.fullWidth {
    width: 100%;
  }
`

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 152px;
  border-radius: 4px;
  padding: 24px;
  outline: none;
  resize: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
`

export const SubmitButton = styled.button`
  height: 56px;
  padding: 0 32px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  gap: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.sec};
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

export const AddressInfoContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const AddressIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: rgba(104, 79, 255, 0.1);
`

export const AddressContact = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};
`

export const SocialMediaContainer = styled.div`
  height: 60px;
  display: flex;
  gap: 12px;
`

export const SocialMediaButton = styled.div`
  width: 60px;
  height: 60px;
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  background-color: ${({ theme }) => theme.colors.white};

  &.active {
    background-color: ${({ theme }) => theme.colors.sec};
    border: none;
  }
`

export const pinkDotsImageWrapper = styled.div`
  position: absolute;
  top: -34px;
  right: -76px;
`