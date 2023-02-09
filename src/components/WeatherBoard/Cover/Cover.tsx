import React, {FC} from 'react';
import {StyledContainer, StyledCoverIcon, StyledTitle} from "./styledCover";
import cover from "../../../assets/images/cloudyCover.gif"

export const Cover:FC = () => {
    return (
        <StyledContainer>
            <StyledCoverIcon src={cover}/>
            <StyledTitle>Узнайте погоду в любой точке мира</StyledTitle>
        </StyledContainer>
    );
};