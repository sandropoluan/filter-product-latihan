import {CHANGE_DELIVERY_TIME} from '../types';

export default value => {
    return {type: CHANGE_DELIVERY_TIME, payload: value};
}