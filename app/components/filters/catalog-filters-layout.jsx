import React, {Component} from 'react';


import LocationFilter from './location-filter';
import ProductFilter  from './product-filter';

class CatalogFilterLayout extends Component {

    render() {
        return (
            <div className="catalog-filters-layout">
                <LocationFilter/>
                <ProductFilter/>
            </div>
        );
    }
}

export default CatalogFilterLayout;
