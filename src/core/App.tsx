import React, {FC} from 'react';
import {Form, WeatherBoard, Forecast} from "../components/";
import '../assets/App.css'

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
