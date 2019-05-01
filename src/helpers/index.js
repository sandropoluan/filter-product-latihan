import _ from 'lodash';

export const deliveryMaping = (day) => {
    if (day <= 7) {
        return '1 Minggu';
    } else if (day <= 14) {
        return '2 Minggu';
    } else if (day <= 30) {
        return '1 Bulan';
    }
    return '1 Bulan lebih'
};

export const filterProduct = (products, filters) => {
    const {deliveryTime = '', keywords = '', styles = []} = filters;
    if (keywords.length) {
        const pattern = new RegExp(`${keywords}`, 'ig');
        products = products.filter(product => pattern.test(product.name));
    }
    if (deliveryTime > -1) {
        const oneWeek = deliveryTime === '7';
        const twoWeek = deliveryTime === '14';
        const oneMonth = deliveryTime === '31';
        const moreAMonth = deliveryTime === '0';

        if (oneWeek) {
            products = products.filter(product => product.delivery_time >= 1 && product.delivery_time <= 7);
        } else if (twoWeek) {
            products = products.filter(product => product.delivery_time >= 8 && product.delivery_time <= 14);
        } else if (oneMonth) {
            products = products.filter(product => product.delivery_time >= 15 && product.delivery_time <= 30);
        } else if (moreAMonth) {
            products = products.filter(product => product.delivery_time >= 31);
        }
    }

    products = products.filter(product => _.intersection(styles, product.furniture_style).length);


    return products;
};
