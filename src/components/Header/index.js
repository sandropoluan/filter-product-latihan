import React, {Component} from 'react';
import {connect} from "react-redux";
import {showFilterStyleBox, changeKeywords, changeDeliveryTime} from '../../redux/actions';
import './styles.scss';
import StyleFilterBox from "../StyleFilterBox";

class Header extends Component {
    showStyleFilter = () => {
        this.props.showFilterStyleBox(true);
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.props.changeKeywords(value);
    }

    handleChangeDelivery = (e) => {
        const {value} = e.target;
        this.props.changeDeliveryTime(value);
    }

    render() {
        const {showFilterBox, filters} = this.props;
        const {keywords, deliveryTime} = filters;
        return (
            <div className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <input className='form-control search-box' placeholder='Search Furniture' value={keywords}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className='row second-row'>
                        <div className='col-lg-6 filter-box-wrapper' onClick={this.showStyleFilter}>
                            <div className='filter-box'>
                                Furniture Style
                            </div>
                            {showFilterBox && <StyleFilterBox/>}
                        </div>
                        <div className='col-lg-6'>
                            <select className='form-control' value={deliveryTime} onChange={this.handleChangeDelivery}>
                                <option value={''}>Delivery Time</option>
                                <option value='7'>1 Week</option>
                                <option value='14'>2 Week</option>
                                <option value='31'>1 Month</option>
                                <option value='0'>More than 1 Month</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    products: state.products,
    furniture_styles: state.furniture_styles,
    filters: state.filters,
    showFilterBox: state.showFilterBox
}), {showFilterStyleBox, changeKeywords, changeDeliveryTime})(Header);