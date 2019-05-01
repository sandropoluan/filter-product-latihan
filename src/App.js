import React, {Component} from 'react';
import {connect} from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingBoundary from './components/LoadingBoundary';
import Header from "./components/Header";
import Body from "./components/Body";
import {fetchData} from './redux/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {loading, error} = this.props;
        return <ErrorBoundary error={error}>
            <LoadingBoundary loading={loading}>
                <Header/>
                <Body/>
            </LoadingBoundary>
        </ErrorBoundary>
    }
}

export default connect(state => ({
    products: state.products,
    furniture_styles: state.furniture_styles,
    loading: state.loading,
    error: state.error,
    filters: state.filters,
}), {fetchData})(App);
