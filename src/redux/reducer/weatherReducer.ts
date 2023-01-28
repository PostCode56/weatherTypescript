import {WeatherAction, WeatherActionTypes, WeatherState} from "../types/weatherTypes";

const initialState: WeatherState = {
    errorModal: false,
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
                ...state,
                cover: false,
                loading: true
            }
        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
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
                ...state,
                cover: true,
                loading: false
            }
        case WeatherActionTypes.MODAL_ERROR:
            return {
                ...state,
                cover: false,
                loading: false,
                errorModal: action.loadError
            }
        default:
            return state;
    }
}