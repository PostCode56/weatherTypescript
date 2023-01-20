import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledCoverIcon = styled.img`
  position: absolute;
  width: 600px;
  height: 600px;
  @media (min-width: 250px) and (max-width: 399px) {
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