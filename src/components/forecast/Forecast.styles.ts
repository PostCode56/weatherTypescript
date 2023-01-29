import styled from "styled-components";

export const StyledSection = styled.section`
  width: 85%;
  margin: 60px auto;
  display: flex;
  justify-content: space-between;
  background: rgba(209, 209, 209, 0.4);
  border-radius: 15px;
  @media (min-width: 250px) and (max-width: 925px) {
    flex-direction: column;
    margin: 5px auto;
  }
`
export const StyledContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 50px;
  color: white;
  @media (min-width: 926px) and (max-width: 1500px) {
    padding: 10px;
  }
  @media (min-width: 250px) and (max-width: 925px) {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`
export const StyledIcon = styled.img`
  @media (min-width: 250px) and (max-width: 650px) {
    width: 35px;
    height: 35px;
  }
`
export const StyledText = styled.div`
  overflow-wrap: break-word;
  font-size: 24px;
  height: 40px;
  border-bottom: 1px solid white;
  @media (min-width: 926px) and (max-width: 1500px) {
    margin-top: 25px;
    font-size: 18px;
  }
  @media (min-width: 651px) and (max-width: 925px) {
    margin-top: 25px;
    border-bottom: none;
    height: 20px;
    width: 120px;
    font-size: 14px;
  }
  @media (min-width: 250px) and (max-width: 650px) {
    margin-top: 5px;
    height: 20px;
    border-bottom: none;
    width: 80px;
    font-size: 11px;
  }
`
export const StyledTextTemp = styled.div`
  overflow-wrap: break-word;
  font-size: 24px;
  margin-top: 30px;
  @media (min-width: 651px) and (max-width: 1024px) {
    margin-top: 25px;
    width: 120px;
    font-size: 18px;
  }
  @media (min-width: 250px) and (max-width: 650px) {
    margin-top: 5px;
    width: 80px;
    font-size: 14px;
  }
`
export const StyledCloudText = styled.div`
  overflow-wrap: break-word;
  max-width: 160px;
  font-size: 20px;
  margin: 10px 0;
  height: 36px;
  @media (min-width: 651px) and (max-width: 1024px) {
    margin-top: 25px;
    width: 120px;
    font-size: 16px;
  }
  @media (min-width: 250px) and (max-width: 650px) {
    margin-top: 5px;
    font-size: 11px;
    width: 85px;
  }
`
