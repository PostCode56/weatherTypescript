export interface WeatherState {
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
    loading: boolean,
    error: null | string,
    cover: boolean,
}

export enum WeatherActionTypes {
    FETCH_WEATHER = "FETCH_WEATHER",
    FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
    FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR"
}

interface FetchWeatherAction {
    type: WeatherActionTypes.FETCH_WEATHER;
}

interface FetchWeatherSuccessAction {
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
    payload: string,
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

interface FetchWeatherErrorAction {
    type: WeatherActionTypes.FETCH_WEATHER_ERROR;
    payload: string
}

export type WeatherAction = FetchWeatherAction | FetchWeatherSuccessAction | FetchWeatherErrorAction