import React, {FC} from 'react';
import Form from "../components/form/form";
import '../App.css'
import WeatherBoard from "../components/weatherBoard/weatherBoard";

const App:FC = () => {
  return (
      <div>
        <Form/>
          <WeatherBoard/>
      </div>
  );
};

export default App;
