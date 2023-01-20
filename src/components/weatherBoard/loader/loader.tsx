import React, {FC} from 'react';
import {StyledContainer, StyledLoading} from "./loader.styles";

const Loader: FC = () => {
    return (
        <StyledContainer>
            <StyledLoading/>
        </StyledContainer>
    );
};

export default Loader;