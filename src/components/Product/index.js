import React, { Component } from 'react';
import numeral from 'numeral';
import './styles.scss';

class Product extends Component {
  render() {
    const {
      name,
      description,
      furniture_style,
      delivery_time,
      price
    } = this.props.data;
    return (
      <div className="col-lg-6">
        <div className="product">
          <div className="flex-area">
            <div className="name">{name}</div>
            <div className="price">Rp {numeral(price).format('0,0')}</div>
          </div>
          <div className="description">
            {(description || '').substr(0, 114)} ...
          </div>
          <div className="furniture_style">
            {(furniture_style || []).join(', ')}
          </div>
          <div className="flex-area">
            <div className="delivery_time">{delivery_time} Hari</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
