import {CHANGE_KEYWORDS} from '../types';

export default keyword => {
    return {type: CHANGE_KEYWORDS, payload: keyword};
}