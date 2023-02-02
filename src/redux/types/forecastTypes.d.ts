export declare module forecastTypes {

    export interface Main {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    }

    export interface Weather {
        id: number
        main: string;
        description: string;
        icon: string;
    }

    export interface Clouds {
        all: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
        gust: number;
    }

    export interface Sys {
        pod: string;
    }

    export interface List {
        dt: number;
        main: forecastTypes.Main;
        weather: forecastTypes.Weather[];
        clouds: forecastTypes.Clouds;
        wind: forecastTypes.Wind;
        visibility: number;
        pop: number;
        sys: forecastTypes.Sys;
        dt_txt: string;
    }

    export interface RootList {
        list: List[];
    }
}

