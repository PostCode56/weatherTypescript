import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as WeatherActionCreators from '../reducer/action-creators/weatherActionCreators'

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(WeatherActionCreators, dispatch)
}