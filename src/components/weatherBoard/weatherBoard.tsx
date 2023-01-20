import React, {FC} from 'react';
import {StyledContainer, StyledSection} from "./weatherBoard.styles";
import WeatherCloud from "../weatherCloud/weatherCloud";
import WeatherParameters from "../weatherParameters/weatherParameters";
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";
import Loader from "./loader/loader";
import Cover from "./cover/cover";

const WeatherBoard: FC = () => {
    const loading = useTypedSelector(state => state.weather.loading)
    const cover = useTypedSelector(state => state.weather.cover)
    return (
        <StyledSection>
            {cover
                ? <Cover/>
                : loading
                    ? <Loader/>
                    : <StyledContainer
                        style={{
                            opacity: loading
                                ? "0"
                                : "1"
                        }}>
                        <WeatherCloud/>
                        <WeatherParameters/>
                    </StyledContainer>
            }
        </StyledSection>
    );
};

export default WeatherBoard;