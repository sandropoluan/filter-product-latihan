import {FETCH_PRODUCT_LOADING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR} from "../types";
import axios from "axios";

export default () => {
    return dispatch => {
        dispatch({type: FETCH_PRODUCT_LOADING});
        axios.get(`http://www.mocky.io/v2/5c9105cb330000112b649af8`, {
            withCredentials: false,
            responseType: 'json'
        }).then(response => {
            console.log('response', response);
            const {status, data} = response || {};
            const {furniture_styles, products} = data || {};
            if (status === 200) {
                return dispatch({type: FETCH_PRODUCT_SUCCESS, payload: {furniture_styles, products}});
            } else {
                return dispatch({type: FETCH_PRODUCT_ERROR, payload: 'Please try again'});
            }
        }).catch(error => {
            console.log('error', error);
            return dispatch({type: FETCH_PRODUCT_ERROR, payload: 'Please try again'});
        });
    };
}