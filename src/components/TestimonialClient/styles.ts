import styled from "styled-components"

export const Client = styled.div`
  width: inherit;
  display: flex;
  padding: 24px;
  border-radius: 4px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &.active {
    background: linear-gradient(0deg, rgba(223, 227, 235, 0.3),
      rgba(223, 227, 235, 0.3)),
      #FFFFFF;
  }
`

export const ClientAvatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[500]};
`

export const ClientInfoContainer = styled.div`
  width: 196px;
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const ClientName = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};
`

export const ClientOccupation = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[500]};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`