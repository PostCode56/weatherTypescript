import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import {Global} from "./utils/globalStyles";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Global/>
        <App/>
    </Provider>
);