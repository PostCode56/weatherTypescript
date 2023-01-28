import React, {FC} from 'react';
import Form from "../components/form/Form";
import '../assets/App.css'
import WeatherBoard from "../components/weatherBoard/WeatherBoard";

const App: FC = () => {
    return (
        <div>
            <Form/>
            <WeatherBoard/>
        </div>
    );
};

export default App;
