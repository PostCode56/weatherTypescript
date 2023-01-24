import {Dispatch} from "redux";
import {WeatherAction, WeatherActionTypes} from "../../types/weatherTypes";
import axios from "axios";

export const fetchWeather = (inputValue: any) => {
    const basic = 'https://api.openweathermap.org/data/2.5/';
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const responce = await axios(`${basic}weather?q=${inputValue}&lang=ru&units=metric&appid=${process.env.REACT_APP_KEY}`)
            setTimeout(() => {
                dispatch({
                    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
                    payload: responce.data,
                    loadCountry: responce.data.sys.country,
                    loadTemp: responce.data.main.temp,
                    loadFeelsLik: responce.data.main.feels_like,
                    loadMaxTemp: responce.data.main.temp_max,
                    loadMinTemp: responce.data.main.temp_min,
                    loadCity: responce.data.name,
                    loadPressure: responce.data.main.pressure,
                    loadHumidity: responce.data.main.humidity,
                    loadWind: responce.data.wind.speed,
                    loadClouds: responce.data.weather[0].description,
                })
            }, 500)
        } catch (e) {
            alert("Произошла ошибка при загрузке данных с сервера!")
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_ERROR,
                payload: 'Произошла ошибка при загрузке данных с сервера!'
            })
        }
    }
}

