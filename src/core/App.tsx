import React, {FC} from 'react';
import Form from "../components/form/Form";
import '../assets/App.css'
import WeatherBoard from "../components/weatherBoard/WeatherBoard";
import Forecast from "../components/forecast/Forecast";

const App: FC = () => {
    return (
        <div>
            <Form/>
            <WeatherBoard/>
            <Forecast/>
        </div>
    );
};

export default App;
