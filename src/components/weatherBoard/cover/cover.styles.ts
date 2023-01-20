import styled from "styled-components";

export const StyledContainer = styled.div`
  text-align: center;
`
export const StyledCoverIcon = styled.img`
  width: 600px;
  height: 600px;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 350px;
    height: 350px;
  }
`
export const StyledTitle = styled.div`
  margin-top: 20px;
  font-size: 36px;
  color: white;
  @media (min-width: 250px) and (max-width: 399px) {
    font-size: 22px;
  }
`