import React, {FC} from 'react';
import {useTypedSelector} from "../../redux/hooks/useTypeSelector";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
} from "react-accessible-accordion";
import {
    StyledCloudText,
    StyledContainer,
    StyledIcon,
    StyledSection,
    StyledText,
    StyledTextTemp
} from "./styledForecast";

export const Forecast: FC = () => {
    const data = useTypedSelector(state => state.weather.forecast.list)
    const loading = useTypedSelector(state => state.weather.loading)
    const basicIcon = "https://openweathermap.org/img/wn/"
    const WEEK_DAY = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const dainInWeek = new Date().getDay()
    const forecastDay = WEEK_DAY.slice(dainInWeek, WEEK_DAY.length).concat(WEEK_DAY.slice(0, dainInWeek))
    return (
        <Accordion allowZeroExpanded
                   style={{
                       visibility: loading
                           ? "hidden"
                           : "visible"
                   }}>
            <StyledSection>
                {data.splice(0, 6).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <StyledContainer>
                                    <StyledIcon src={`${basicIcon}${item.weather[0].icon}@2x.png`} alt=""/>
                                    <StyledText>{forecastDay[idx]}</StyledText>
                                    <StyledCloudText>{item.weather[0].description}</StyledCloudText>
                                    <StyledTextTemp>{Math.round(item.main.temp_min)}°/{Math.round(item.main.temp_max)}°</StyledTextTemp>
                                </StyledContainer>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </AccordionItem>
                ))}
            </StyledSection>
        </Accordion>
    );
};
