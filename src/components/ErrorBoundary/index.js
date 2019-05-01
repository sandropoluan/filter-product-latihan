import React, {Component} from 'react';
import './styles.scss';
import {connect} from "react-redux";
import {fetchData} from "../../redux/actions";

class ErrorBoundary extends Component {
    render() {
        const {error, fetchData, children} = this.props;
        return (
            <div className='error-boundary'>
                {error && <div className='error-area'>
                    <span className='error-text-area'>{error}</span>
                    <div className='btn btn-sm btn-warning' onClick={fetchData}>Retry</div>
                </div>}
                {!error && children}
            </div>
        );
    }
}

export default connect(null, {fetchData})(ErrorBoundary);