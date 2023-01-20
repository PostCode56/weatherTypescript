import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledLoading = styled.div`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px dashed white;
  animation: rotate 1s infinite linear;
  @media (min-width: 250px) and (max-width: 399px) {
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