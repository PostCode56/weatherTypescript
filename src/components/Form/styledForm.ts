import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  margin: 50px auto;
`
export const StyledContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`
export const StyledForm = styled.div`
  margin-top: 150px;
  margin-bottom: 70px;
  text-align: center;
  @media (min-width: 250px) and (max-width: 925px) {
    margin-top: 50px;
    margin-bottom: 0;
  }
`
export const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  font-size: 18px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 0 10px;
  @media (min-width: 250px) and (max-width: 399px) {
    width: 90%;
  }
`