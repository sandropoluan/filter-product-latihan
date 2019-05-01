import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleStyleFilter} from '../../redux/actions';
import './styles.scss';

class StyleFilterList extends Component {
    handleClick = () => {
        const {data, toggleStyleFilter} = this.props;
        toggleStyleFilter(data);
    }

    render() {
        const {data, selectedStyles} = this.props;
        const checked = selectedStyles.indexOf(data) > -1;

        return (
            <div className='style-filter-list'>
                <div className='label'>{data}</div>
                <input className='checkbox' type='checkbox' checked={checked} onChange={this.handleClick}/>
            </div>
        );
    }
}

export default connect(null, {toggleStyleFilter})(StyleFilterList);