import React, {Component} from 'react';


import LocationFilter from './location-filter';

class CatalogFilterLayout extends Component {

    render() {
        return (
            <div className="catalog-filters-layout">
                <LocationFilter/>
            </div>
        );
    }
}

export default CatalogFilterLayout;
