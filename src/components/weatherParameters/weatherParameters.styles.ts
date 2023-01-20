import styled from "styled-components";

export const StyledSection = styled.div`
  width: 50%;
  padding: 15px 0;
  margin: 0 auto;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 100%;
  }
`
export const StyledContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 25px 0;
  background: rgba(209, 209, 209, 0.4);;
  border-radius: 20px;
  @media (min-width: 250px) and (max-width: 399px) {
    margin-top: 20px;
  }
`
export const StyledItems = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
`
export const StyledParameters = styled.div`
  width: 33.3%;
  text-align: center;
  color: white;
  padding: 25px 0;
  font-size: 48px;
  @media (min-width: 651px) and (max-width: 1500px) {
    font-size: 42px;
  }
  @media (min-width: 400px) and (max-width: 650px) {
    font-size: 32px;
  }
  @media (min-width: 250px) and (max-width: 399px) {
    font-size: 24px;
  }
`
export const StyledTitle = styled.div`
  font-size: 22px;
  @media (min-width: 926px) and (max-width: 1500px) {
    font-size: 20px;
  }
  @media (min-width: 651px) and (max-width: 925px) {
    font-size: 18px;
  }
  @media (min-width: 400px) and (max-width: 650px) {
    font-size: 14px;
  }
  @media (min-width: 250px) and (max-width: 399px) {
    font-size: 11px;
  }
`