import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledLoading = styled.img`
  margin-top: 100px;
  width: 350px;
  height: 350px;
  animation: rotate 1s infinite linear;
  @media (min-width: 250px) and (max-width: 650px) {
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