import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`
export const StyledCoverIcon = styled.img`
  width: 500px;
  height: 500px;
  @media (min-width: 300px) and (max-width: 925px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 250px) and (max-width: 299px) {
    width: 280px;
    height: 280px;
  }
`
export const StyledTitle = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  color: white;
  @media (min-width: 250px) and (max-width: 399px) {
    font-size: 24px;
  }
`