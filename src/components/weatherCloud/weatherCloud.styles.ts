import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  color: white;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 90%;
  }
`
export const StyledTitleCity = styled.div`
  font-size: 120px;
  text-align: left;
  padding-left: 25px;
  display: flex;
  @media (min-width: 651px) and (max-width: 925px) {
    font-size: 82px;
    padding-left: 0;
  }
  @media (min-width: 250px) and (max-width: 650px) {
    font-size: 48px;
    padding-left: 0;
  }
`
export const StyledCloudItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const StyledIcon = styled.img`
  width: 50%;
  @media (min-width: 400px) and (max-width: 650px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 250px) and (max-width: 399px) {
    width: 144px;
    height: 144px;
  }
`
export const StyledTempContainer = styled.div`
  width: 30%;
  margin-top: 20px;
  @media (min-width: 250px) and (max-width: 925px) {
    width: 144px;
    margin-top: 0px;
  }
`
export const StyledTemp = styled.div`
  margin-top: 15px;
  font-size: 144px;
  text-align: center;
  @media (min-width: 926px) and (max-width: 1500px) {
    margin-top: 0;
    font-size: 92px;
  }
  @media (min-width: 250px) and (max-width: 925px) {
    margin-top: 0;
    font-size: 92px;
  }
`
export const StyledCountry = styled.div`
  font-size: 32px;
  @media (min-width: 250px) and (max-width: 925px) {
    font-size: 18px;
  }
`
export const StyledCloudText = styled.div`
  font-size: 48px;
  text-align: center;
  margin-left: 15px;
  @media (min-width: 250px) and (max-width: 925px) {
    font-size: 20px;
    margin-left: 25px;
  }
`