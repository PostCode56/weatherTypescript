import {Dispatch} from "redux";
import {WeatherAction, WeatherActionTypes} from "../../types/weatherTypes";
import axios from "axios";

const api = {
    key: "27f066f82abeae27bb8a026c352c04b9",
    basic: 'https://api.openweathermap.org/data/2.5/',
}

export const fetchWeather = (inputValue: any) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const responce = await axios(`${api.basic}weather?q=${inputValue}&lang=ru&units=metric&appid=${api.key}`)
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
            console.log(responce.data)
        } catch (e) {
            alert("Произошла ошибка при загрузке данных с сервера!")
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_ERROR,
                payload: 'Произошла ошибка при загрузке данных с сервера!'
            })
        }
    }
}

