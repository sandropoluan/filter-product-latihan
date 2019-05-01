import {TOGGLE_STYLE_FILTER} from '../types/';

export default value => {
    return {type: TOGGLE_STYLE_FILTER, payload: value};
}