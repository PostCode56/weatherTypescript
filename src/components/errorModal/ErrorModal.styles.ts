import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  margin: 1% auto;
  position: absolute;
`
export const StyledContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  @media (min-width: 250px) and (max-width: 900px) {
    flex-direction: column;
  }
`
export const StyledTitleError = styled.div`
  margin-top: 10%;
  font-size: 48px;
  color: white;
  @media (min-width: 250px) and (max-width: 399px) {
    font-size: 32px;
  }
`
export const StyledImg = styled.img`
  width: 400px;
  height: 400px;
  animation: rotate 2s infinite linear;
  @media (min-width: 250px) and (max-width: 900px) {
    width: 150px;
    height: 150px;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export const StyledItems = styled.div`
  display: flex;
  justify-content: center;

`