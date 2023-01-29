import React, {FC} from 'react';
import {StyledContainer, StyledLoading} from "./Loader.styles";
import {loader} from "../../../assets/images";

const Loader: FC = () => {
    return (
        <StyledContainer>
            <StyledLoading src={loader}/>
        </StyledContainer>
    );
};

export default Loader;