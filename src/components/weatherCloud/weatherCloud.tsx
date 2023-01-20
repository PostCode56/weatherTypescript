import React, {FC, useEffect, useState} from 'react';
import {
    StyledCloudItems, StyledCloudText,
    StyledContainer, StyledCountry,
    StyledIcon, StyledTemp,
    StyledTempContainer,
    StyledTitleCity
} from "./weatherCloud.styles";
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";

const WeatherCloud: FC = () => {
    const weathers = useTypedSelector(state => state.weather.weather)
    const [cloudIconValue, setCloudIconValue] = useState("");
    useEffect(() => {
        cloudIconFetch();
    },)
    const cloudIconFetch = () => {
        switch (weathers.clouds) {
            case "ясно":
                setCloudIconValue("ясно1.png");
                break;
            case "облачно с прояснениями":
                setCloudIconValue("Cloud.png");
                break;
            case "пасмурно":
                setCloudIconValue("пасмурно.png");
                break;
            case "небольшая облачность":
                setCloudIconValue("необл.png");
                break;
            case "переменная облачность":
                setCloudIconValue("Cloud.png");
                break;
            case "туман":
                setCloudIconValue("туман.png");
                break;
            case "небольшой дождь":
                setCloudIconValue("небольшойдождь.png");
                break;
            case "сильный дождь":
                setCloudIconValue("сильныйдождь.png");
                break;
            case "дождь":
                setCloudIconValue("дождь.png");
                break;
            case "гроза с небольшим дождём":
                setCloudIconValue("грозаснебольшимдождем.png");
                break;
        }
    }
    return (
        <StyledContainer>
            <StyledTitleCity>{weathers.city}<StyledCountry>{weathers.country}</StyledCountry></StyledTitleCity>
            <StyledCloudItems>
                <StyledIcon id="iconCloud" src={`/cloud/${cloudIconValue}`} alt="icon"></StyledIcon>
                <StyledTempContainer>
                    <StyledTemp>{Math.round(weathers.temp) + "°"}</StyledTemp>
                    <StyledCloudText>{weathers.clouds}</StyledCloudText>
                </StyledTempContainer>
            </StyledCloudItems>
        </StyledContainer>
    );
};

export default WeatherCloud;