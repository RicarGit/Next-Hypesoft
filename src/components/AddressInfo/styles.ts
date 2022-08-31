import styled from "styled-components"

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