import React, {FC, useEffect, useState} from 'react';
import {
    StyledCloudItems, StyledCloudText,
    StyledContainer, StyledCountry,
    StyledIcon, StyledTemp,
    StyledTempContainer,
    StyledTitleCity
} from "./weatherCloud.styles";
import clear from "../../assets/images/cloud/ясно1.png";
import cloud from "../../assets/images/cloud/Cloud.png";
import cloudy from "../../assets/images/cloud/пасмурно.png";
import cloudCover from "../../assets/images/cloud/небобл.png";
import partly from "../../assets/images/cloud/Cloud.png";
import fog from "../../assets/images/cloud/туман.png";
import minRain from "../../assets/images/cloud/небольшойдождь.png";
import strongRain from "../../assets/images/cloud/сильныйдождь.png";
import rain from "../../assets/images/cloud/дождь.png";
import storm from "../../assets/images/cloud/грозаснебольшимдождём.png";
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";

const WeatherCloud: FC = () => {
    const weathers = useTypedSelector(state => state.weather.weather)
    const [cloudIconValue, setCloudIconValue] = useState();
    useEffect(() => {
        cloudIconFetch();
    },)
    const cloudIconFetch = () => {
        switch (weathers.clouds) {
            case "ясно":
                setCloudIconValue(clear);
                break;
            case "облачно с прояснениями":
                setCloudIconValue(cloud);
                break;
            case "пасмурно":
                setCloudIconValue(cloudy);
                break;
            case "небольшая облачность":
                setCloudIconValue(cloudCover);
                break;
            case "переменная облачность":
                setCloudIconValue(partly);
                break;
            case "туман":
                setCloudIconValue(fog);
                break;
            case "небольшой дождь":
                setCloudIconValue(minRain);
                break;
            case "сильный дождь":
                setCloudIconValue(strongRain);
                break;
            case "дождь":
                setCloudIconValue(rain);
                break;
            case "гроза с небольшим дождём":
                setCloudIconValue(storm);
                break;
        }
    }
    return (
        <StyledContainer>
            <StyledTitleCity>{weathers.city}<StyledCountry>{weathers.country}</StyledCountry></StyledTitleCity>
            <StyledCloudItems>
                <StyledIcon src={cloudIconValue} alt="icon"></StyledIcon>
                <StyledTempContainer>
                    <StyledTemp>{Math.round(weathers.temp) + "°"}</StyledTemp>
                    <StyledCloudText>{weathers.clouds}</StyledCloudText>
                </StyledTempContainer>
            </StyledCloudItems>
        </StyledContainer>
    );
};

export default WeatherCloud;