import React, {FC} from 'react';
import {
    StyledContainer,
    StyledImg, StyledItems,
    StyledSection,
    StyledTitleError
} from "./ErrorModal.styles";
import {error} from '../../assets/images/index'

const ErrorModal: FC = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItems>
                    <StyledImg src={error} alt="error"/>
                </StyledItems>
                <StyledTitleError>
                    ОШИБКА 400. Произошла сетевая ошибка! Попробуйте перезагрузить страницу.
                </StyledTitleError>
            </StyledContainer>
        </StyledSection>
    );
};

export default ErrorModal;