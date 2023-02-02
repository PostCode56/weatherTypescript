import {
    clear,
    cloudy,
    cloudCover,
    partly,
    fog,
    cloud,
    minRain,
    strongRain,
    rain,
    storm,
    snow
} from '../assets/images/index'

export const cloudIconFetch = ({weathers, setCloudIconValue}: any) => {
    switch (weathers.clouds) {
        case "ясно":
            setCloudIconValue(clear);
            break;
        case "облачно с прояснениями":
            setCloudIconValue(cloud);
            break;
        case "пасмурно":
            setCloudIconValue(cloudy);
            break;
        case "небольшая облачность":
            setCloudIconValue(cloudCover);
            break;
        case "переменная облачность":
            setCloudIconValue(partly);
            break;
        case "туман":
            setCloudIconValue(fog);
            break;
        case "небольшой дождь":
            setCloudIconValue(minRain);
            break;
        case "сильный дождь":
            setCloudIconValue(strongRain);
            break;
        case "дождь":
            setCloudIconValue(rain);
            break;
        case "гроза с небольшим дождём":
            setCloudIconValue(storm);
            break;
        case "небольшой снег":
            setCloudIconValue(snow);
            break;
        case "снег":
            setCloudIconValue(snow);
            break;
        case "небольшой снегопад":
            setCloudIconValue(snow);
            break;
    }
}