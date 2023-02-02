import {forecastTypes} from './forecastTypes'
export interface WeatherState{
    weather: {
        country: null | string,
        temp: number,
        feels_lik: number,
        max_temp: number,
        min_temp: number,
        city: null | string,
        pressure: number,
        humidity: number,
        wind: number,
        clouds: null | string
    },
    forecast: forecastTypes.RootType,
    loading: boolean,
    cover: boolean,
    error: boolean,
}

export enum WeatherActionTypes {
    ERROR = "ERROR",
    FETCH_WEATHER = "FETCH_WEATHER",
    FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
}

interface ErrorAction {
    type: WeatherActionTypes.ERROR;
    loadError: boolean;
}

interface FetchWeatherAction {
    type: WeatherActionTypes.FETCH_WEATHER;
}

interface FetchWeatherSuccessAction {
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
    loadForecast: [],
    loadCountry: string,
    loadTemp: number,
    loadFeelsLik: number,
    loadMaxTemp: number,
    loadMinTemp: number,
    loadCity: string,
    loadPressure: number,
    loadHumidity: number,
    loadWind: number,
    loadClouds: string,
}

export type WeatherAction = FetchWeatherAction | FetchWeatherSuccessAction | ErrorAction