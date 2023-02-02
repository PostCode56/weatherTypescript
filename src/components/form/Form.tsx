import React, {FC} from 'react';
import {StyledContainer, StyledForm, StyledSection} from "./styledForm";
import {Search} from "../index"

export const Form: FC = () => {
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