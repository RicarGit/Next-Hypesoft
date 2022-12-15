import styled from "styled-components"

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