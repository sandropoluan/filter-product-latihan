import React, {Component} from 'react';
import {connect} from "react-redux";
import OutsideClickHandler from 'react-outside-click-handler';
import StyleFilterList from '../StyleFilterList';
import {showFilterStyleBox} from "../../redux/actions";
import './styles.scss';

class StyleFilterBox extends Component {
    render() {
        const {filters, furniture_styles, showFilterStyleBox} = this.props;
        const {styles} = filters;
        return (
            <OutsideClickHandler onOutsideClick={() => {
                showFilterStyleBox(false);
            }}>
                <div className='style-filter-box'>
                    {furniture_styles.map((item, index) => <StyleFilterList selectedStyles={styles} data={item}
                                                                            key={index}/>)}
                </div>
            </OutsideClickHandler>
        );
    }
}

export default connect(state => ({
    filters: state.filters,
    furniture_styles: state.furniture_styles
}), {showFilterStyleBox})(StyleFilterBox);
