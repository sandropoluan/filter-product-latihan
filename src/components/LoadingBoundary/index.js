import React, {Component} from 'react';
import './styles.scss'

class LoadingBoundary extends Component {
    render() {
        const {loading, children} = this.props;
        return (
            <div className='loading-boundary'>
                {loading && <div className='loading-text'>Loading...</div>}
                {!loading && children}
            </div>
        );
    }
}

export default LoadingBoundary;