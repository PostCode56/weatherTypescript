import React, {FC} from 'react';
import {StyledContainer, StyledCoverIcon, StyledTitle} from "./cover.styles";
import cover from "../../../assets/images/cloudyCover.gif"

const Cover:FC = () => {
    return (
        <StyledContainer>
            <StyledCoverIcon src={cover}/>
            <StyledTitle>Узнайте погоду в любой точке мира</StyledTitle>
        </StyledContainer>
    );
};

export default Cover;