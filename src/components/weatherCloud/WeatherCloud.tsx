import React, {FC, useEffect, useState} from 'react';
import {
    StyledCloudItems, StyledCloudText,
    StyledContainer, StyledCountry,
    StyledIcon, StyledTemp,
    StyledTempContainer,
    StyledTitleCity
} from "./WeatherCloud.styles";
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";
import {cloudIconFetch} from "../../utils/cloudIconFetch";

const WeatherCloud: FC = () => {
    const weathers = useTypedSelector(state => state.weather.weather)
    const [cloudIconValue, setCloudIconValue] = useState("");
    useEffect(() => {
        cloudIconFetch({weathers, setCloudIconValue});
    }, [])
    return (
        <StyledContainer>
            <StyledTitleCity>
                {weathers.city}
                <StyledCountry>
                    {weathers.country}
                </StyledCountry>
            </StyledTitleCity>
            <StyledCloudItems>
                <StyledIcon src={cloudIconValue} alt="icon"></StyledIcon>
                <StyledTempContainer>
                    <StyledTemp>{Math.round(weathers.temp)}°</StyledTemp>
                    <StyledCloudText>{weathers.clouds}</StyledCloudText>
                </StyledTempContainer>
            </StyledCloudItems>
        </StyledContainer>
    );
};

export default WeatherCloud;