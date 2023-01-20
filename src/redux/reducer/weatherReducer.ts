import {WeatherAction, WeatherState, WeatherActionTypes} from "../types/weatherTypes";

const initialState: WeatherState = {
    weather: {
        country: null,
        temp: 0,
        feels_lik: 0,
        max_temp: 0,
        min_temp: 0,
        city: null,
        pressure: 0,
        humidity: 0,
        wind: 0,
        clouds: null,
    },
    loading: true,
    cover: true,
    error: null,
}
export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.FETCH_WEATHER:
            return {
                loading: true,
                error: null,
                cover: false,
                weather: {
                    country: null,
                    temp: 0,
                    feels_lik: 0,
                    max_temp: 0,
                    min_temp: 0,
                    city: null,
                    pressure: 0,
                    humidity: 0,
                    wind: 0,
                    clouds: null,
                }
            }
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                loading: false,
                error: null,
                cover: false,
                weather: {
                    country: action.loadCountry,
                    temp: action.loadTemp,
                    feels_lik: action.loadFeelsLik,
                    max_temp: action.loadMaxTemp,
                    min_temp: action.loadMinTemp,
                    city: action.loadCity,
                    pressure: action.loadPressure,
                    humidity: action.loadHumidity,
                    wind: action.loadWind,
                    clouds: action.loadClouds,
                }
            }
        case WeatherActionTypes.FETCH_WEATHER_ERROR:
            return {
                loading: false,
                cover: true,
                error: action.payload,
                weather: {
                    country: null,
                    temp: 0,
                    feels_lik: 0,
                    max_temp: 0,
                    min_temp: 0,
                    city: null,
                    pressure: 0,
                    humidity: 0,
                    wind: 0,
                    clouds: null,
                }
            }
        default:
            return state;
    }
}