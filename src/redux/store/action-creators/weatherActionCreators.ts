import {Dispatch} from "redux";
import {WeatherAction, WeatherActionTypes} from "../../types/weatherTypes";
import {WEATHER_API_URL} from "../../../components/search/api";
import axios from "axios";

export const fetchWeather = (searchData: any) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const [lat, lon] = searchData.value.split(" ");
            const [cityName, country] = searchData.label.split(" ")
            const responce = await axios.get(`${WEATHER_API_URL}lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${process.env.REACT_APP_KEY}`)
            setTimeout(() => {
                dispatch({
                    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
                    loadCountry: responce.data.sys.country,
                    loadTemp: responce.data.main.temp,
                    loadFeelsLik: responce.data.main.feels_like,
                    loadMaxTemp: responce.data.main.temp_max,
                    loadMinTemp: responce.data.main.temp_min,
                    loadCity: cityName,
                    loadPressure: responce.data.main.pressure,
                    loadHumidity: responce.data.main.humidity,
                    loadWind: responce.data.wind.speed,
                    loadClouds: responce.data.weather[0].description,
                })
            }, 500)
        } catch (e) {
            dispatch({type: WeatherActionTypes.MODAL_ERROR, loadError: true})
        }
    }
}

