import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from '../Product';
import {filterProduct} from '../../helpers';
import './styles.scss';

class Body extends Component {
    render() {
        const {products: rawProducts, filters} = this.props;
        const products = filterProduct(rawProducts, filters);
        return (
            <div className='container' style={{paddingBottom:30}}>
                <div className='row'>
                    {products.map((product, index) => {
                        return <Product key={index} data={product}/>
                    })}
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    products: state.products,
    filters: state.filters
}))(Body);