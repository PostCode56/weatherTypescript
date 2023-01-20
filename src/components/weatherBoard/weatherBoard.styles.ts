import styled from "styled-components";

export const StyledSection = styled.div`
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`
export const StyledContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  @media (min-width: 250px) and (max-width: 925px) {
    flex-direction: column;
  }
`