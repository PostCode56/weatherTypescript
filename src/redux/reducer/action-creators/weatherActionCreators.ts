import {Dispatch} from "redux";
import {WeatherAction, WeatherActionTypes} from "../../types/weatherTypes";
import {basic, FORECAST_API_URL, GEO_API_URL, geoApiOptions, WEATHER_API_URL} from "../../../utils/api";
import axios from "axios";

export const searchLoad = async (inputValue: string) => {
    const searchData = await axios.get(`${GEO_API_URL}/cities?minPopulation=100000&languageCode=Ru&namePrefix=${inputValue}`, geoApiOptions)
    try {
        return {
            options: searchData.data.data.map((city: any) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`
                }
            })

        }
    } catch (e) {
        return {
            options: {
                value: null,
                label: null
            }
        }
    }
}

export const fetchWeather = (searchData: any) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const [lat, lon] = searchData.value.split(" ");
            const [cityName, country] = searchData.label.split(" ")
            const responce = await axios.get(`${WEATHER_API_URL}lat=${lat}&lon=${lon}${basic}${process.env.REACT_APP_KEY}`)
            const forecastData = await axios.get(`${FORECAST_API_URL}lat=${lat}&lon=${lon}${basic}${process.env.REACT_APP_KEY}`)
            setTimeout(() => {
                dispatch({
                    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
                    loadForecast: forecastData.data.list,
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
            dispatch({type: WeatherActionTypes.ERROR, loadError: true})
        }
    }
}

