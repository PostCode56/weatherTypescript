import React, {FC} from 'react';
import {
    StyledContainer,
    StyledItems,
    StyledParameters, StyledSection,
    StyledTitle
} from "./WeatherParameters.styles";
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";

const WeatherParameters: FC = () => {
    const weathers = useTypedSelector(state => state.weather.weather)
    return (
        <StyledSection>
            <StyledContainer>
                <StyledItems>
                    <StyledParameters>
                        {Math.round(weathers.feels_lik)}°
                        <StyledTitle>Чувствуется</StyledTitle>
                    </StyledParameters>
                    <StyledParameters>
                        {Math.round(weathers.humidity)}%
                        <StyledTitle>Влажность</StyledTitle>
                    </StyledParameters>
                    <StyledParameters>
                        {weathers.max_temp}°
                        <StyledTitle>Максимальная t</StyledTitle>
                    </StyledParameters>
                </StyledItems>
                <StyledItems>
                    <StyledParameters>
                        {Math.round(weathers.pressure)}
                        <StyledTitle>Давление</StyledTitle>
                    </StyledParameters>
                    <StyledParameters>
                        {Math.round(weathers.wind)}
                        <StyledTitle>Ветер м/с</StyledTitle>
                    </StyledParameters>
                    <StyledParameters>
                        {weathers.min_temp}°
                        <StyledTitle>Минимальная t</StyledTitle>
                    </StyledParameters>
                </StyledItems>
            </StyledContainer>
        </StyledSection>
    );
};

export default WeatherParameters;