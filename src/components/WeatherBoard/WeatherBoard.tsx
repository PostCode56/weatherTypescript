import React, {FC} from 'react';
import {StyledSection} from "./styledWeatherBoard";
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";
import {ScreenSaver} from "../../utils/screenSaver";

export const WeatherBoard: FC = () => {
    const loading = useTypedSelector(state => state.weather.loading)
    const cover = useTypedSelector(state => state.weather.cover)
    const error = useTypedSelector(state => state.weather.error)
    return (
        <StyledSection>
            <ScreenSaver
                loading={loading}
                cover={cover}
                error={error}/>
        </StyledSection>
    );
};
