import {
    FETCH_PRODUCT_LOADING,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR,
    TOGGLE_STYLE_FILTER,
    SHOW_FILTER_STYLE_BOX,
    CHANGE_KEYWORDS,
    CHANGE_DELIVERY_TIME
} from "../types";

const initialState = {
    products: [],
    furniture_styles: [],
    loading: true,
    error: null,
    showFilterBox: false,
    filters: {
        keywords: '',
        deliveryTime: '',
        styles: [],
    },
};

function rootReducer(state = initialState, action) {
    const {type, payload} = action;
    if (type === FETCH_PRODUCT_LOADING) {
        return {...state, loading: true, error: null};
    } else if (type === FETCH_PRODUCT_SUCCESS) {
        const {products, furniture_styles} = payload || [];
        return {
            ...state,
            loading: false,
            error: null,
            products,
            furniture_styles,
            filters: {...state.filters, styles: furniture_styles}
        };
    } else if (type === FETCH_PRODUCT_ERROR) {
        return {...state, loading: false, error: payload};
    } else if (type === TOGGLE_STYLE_FILTER) {
        const {styles} = state.filters;
        let newStyle = [...styles];
        const index = newStyle.indexOf(payload);
        if (index > -1) {
            newStyle.splice(index, 1);
        } else {
            newStyle.push(payload);
        }
        return {...state, filters: {...state.filters, styles: newStyle}};
    } else if (type === SHOW_FILTER_STYLE_BOX) {
        return {...state, showFilterBox: payload};
    } else if (type === CHANGE_KEYWORDS) {
        return {...state, filters: {...state.filters, keywords: payload}};
    } else if (type === CHANGE_DELIVERY_TIME) {
        return {...state, filters: {...state.filters, deliveryTime: payload}};
    }
    return state;
}

export default rootReducer;