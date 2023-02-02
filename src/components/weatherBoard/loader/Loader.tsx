import React, {FC} from 'react';
import {StyledContainer, StyledLoading} from "./styledLoader";
import {loader} from "../../../assets/images";

export const Loader: FC = () => {
    return (
        <StyledContainer>
            <StyledLoading src={loader}/>
        </StyledContainer>
    );
};
