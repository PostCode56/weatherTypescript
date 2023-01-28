import React, {FC, useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {useActions} from "../../redux/hooks/useAction";
import {GEO_API_URL, geoApiOptions} from "./api";
import {fetchWeather} from "../../redux/store/action-creators/weatherActionCreators";

const Search: FC = () => {
    const [search, setSearch] = useState(null)
    const {fetchWeather} = useActions();
    const loadOption = async (inputValue: any) => {
        const datas = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&languageCode=Ru&namePrefix=${inputValue}`, geoApiOptions)
            .then(datas => datas.json())
        try {
            return {
                options: datas.data.map((city: any) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`
                    }
                })

            }
        } catch (e) {
            return {
                options: {
                    value: ``,
                    label: ``
                }
            }
        }
    }
    const onSearchChange = (searchData: any) => {
        fetchWeather(searchData)
    }
    const haddleOnChange = (searchData: any) => {
        setSearch(searchData)
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder="Введите город"
            debounceTimeout={600}
            value={search}
            onChange={haddleOnChange}
            loadOptions={loadOption}
        />
    );
};

export default Search;