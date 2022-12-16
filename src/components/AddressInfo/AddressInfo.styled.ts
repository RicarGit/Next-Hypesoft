import styled from "styled-components"

export const AddressInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 400px) {
    gap: 10px;
  }
`

export const AddressIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: rgba(104, 79, 255, 0.1);

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
  }
`

export const AddressContact = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 370px) {
    font-size: 15px;
  }
`