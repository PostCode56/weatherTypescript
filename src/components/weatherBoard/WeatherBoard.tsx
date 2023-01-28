import React, {FC} from 'react';
import {StyledContainer, StyledSection} from "./WeatherBoard.styles";
import WeatherCloud from "../weatherCloud/WeatherCloud";
import WeatherParameters from "../weatherParameters/WeatherParameters";
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";
import Loader from "./loader/Loader";
import Cover from "./cover/cover";
import ErrorModal from '../errorModal/ErrorModal'

const WeatherBoard: FC = () => {
    const loading = useTypedSelector(state => state.weather.loading)
    const cover = useTypedSelector(state => state.weather.cover)
    const modal = useTypedSelector(state => state.weather.errorModal)
    return (
        <StyledSection>
            {modal
                ? <ErrorModal/>
                : cover
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