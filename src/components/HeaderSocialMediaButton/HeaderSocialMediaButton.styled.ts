import styled from "styled-components"

export const FollowMeButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};

  &.active {
    background-color: ${({ theme }) => theme.colors.sec};
  }
`