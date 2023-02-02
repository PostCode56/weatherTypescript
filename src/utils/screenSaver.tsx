import {Cover, Error, Loader, WeatherBlock} from "../components";
import React, {FC} from "react";

interface IScreen {
    loading: boolean,
    cover: boolean,
    error: boolean,
}

export const ScreenSaver: FC<IScreen> = ({loading, cover, error}) => {
    if (loading)
        return (
            <Loader/>
        )
    if (cover)
        return (
            <Cover/>
        )
    if (error)
        return (
            <Error/>
        )
    return (
        <WeatherBlock/>
    )
};
