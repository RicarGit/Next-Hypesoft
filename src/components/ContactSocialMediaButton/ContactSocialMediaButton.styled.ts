import styled from "styled-components"

export const ContactSocialMediaButton = styled.button`
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

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    padding: 10px;
    justify-content: center;
  }

  @media (max-width: 350px) {
    width: 35px;
    height: 35px;
    padding: 10px;
    justify-content: center;
  }
`