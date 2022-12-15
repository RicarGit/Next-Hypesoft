import styled from "styled-components"

export const MySelectedWorkSection = styled.section`
  width: 100%;
  margin-top: 180px;

  @media (max-width: 450px) {
    padding: 10px;
    margin-top: 100px;
  }
`

export const WorkCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`