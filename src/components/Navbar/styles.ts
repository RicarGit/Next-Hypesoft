import styled from "styled-components"

export const MenuNav = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  padding: 24px 300px;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`

export const NavLink = styled.a`
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weigths.bold};
  color: ${({ theme }) => theme.colors.white}
`