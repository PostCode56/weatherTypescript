import React, {FC} from 'react';
import {StyledContainer, StyledForm, StyledSection} from "./Form.styles";
import Search from "../search/Search";

const Form: FC = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledForm>
                    <Search/>
                </StyledForm>
            </StyledContainer>
        </StyledSection>
    );
};
export default Form;