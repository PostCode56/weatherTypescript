import React, {FC, useState} from 'react';
import {StyledContainer, StyledInput, StyledForm, StyledSection} from "./form.styles";
import {fetchWeather} from "../../redux/store/action-creators/weatherActionCreators";
import {useActions} from "../../redux/hooks/useAction";

const Form: FC = () => {
    const [inputValue, setInputValue] = useState("")
    const {fetchWeather} = useActions()
    const weatherFetch = async (e: any) => {
        e.preventDefault();
        fetchWeather(inputValue)
        setInputValue("")
    }
    return (
        <StyledSection>
            <StyledContainer>
                <div></div>
                <StyledForm
                    onSubmit={(e) => weatherFetch(e)}
                >
                    <StyledInput
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Напишите город"/>
                </StyledForm>
            </StyledContainer>
        </StyledSection>
    );
};

export default Form;