import React, {FC, useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {useActions} from "../../redux/hooks/useAction";
import {fetchWeather, searchLoad} from "../../redux/reducer/action-creators/weatherActionCreators";

export const Search: FC = () => {
    const [search, setSearch] = useState(null)
    const {fetchWeather} = useActions();
    const onSearchChange = (searchData: null) => {
        fetchWeather(searchData)
    }
    const haddleOnChange = (searchData: null) => {
        setSearch(searchData)
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder="Введите город"
            debounceTimeout={600}
            value={search}
            onChange={haddleOnChange}
            loadOptions={(inputValue) => searchLoad(inputValue)}
        />
    );
};
