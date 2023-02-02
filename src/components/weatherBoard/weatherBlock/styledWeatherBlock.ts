import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 85%;
  display: flex;
  margin: 0 auto;
  @media (min-width: 250px) and (max-width: 925px) {
    flex-direction: column;
  }
`