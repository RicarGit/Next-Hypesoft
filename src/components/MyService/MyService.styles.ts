import styled from "styled-components"

export const MyServiceSection = styled.section`
  width: 100%;
  margin-top: 193px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media (max-width: 340px) {
    padding: 0 10px;
  }
`