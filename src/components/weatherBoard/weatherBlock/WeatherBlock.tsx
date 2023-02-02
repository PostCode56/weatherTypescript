import React, {FC} from 'react';
import {StyledContainer} from "./styledWeatherBlock";
import {WeatherParameters, WeatherCloud} from "../../../components";
import {useTypedSelector} from "../../../redux/hooks/useTypeSelector";

export const WeatherBlock: FC = () => {
    const loading = useTypedSelector(state => state.weather.loading)
    return (
        <StyledContainer style={{
            visibility: loading
                ? "hidden"
                : "visible"
        }}>
            <WeatherCloud/>
            <WeatherParameters/>
        </StyledContainer>
    );
};
