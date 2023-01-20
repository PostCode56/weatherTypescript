import React, {FC} from 'react';
import {StyledContainer, StyledCoverIcon, StyledTitle} from "./cover.styles";

const Cover:FC = () => {
    return (
        <StyledContainer>
            <StyledCoverIcon src="/cloud/cloudyCover.gif"/>
            <StyledTitle>Узнайте погоду в любой точке мира</StyledTitle>
        </StyledContainer>
    );
};

export default Cover;