import React, {Component} from 'react';

import ProductItem from './product-item';

class ProductFilter extends Component {

    constructor() {
        super();
        this.state = {
            active: null
        };
        this.handleActive = this.handleActive.bind(this);
        this.isActive=this.isActive.bind(this);
    }

    handleActive(clikedItem) {
        this.setState({active: clikedItem});
    }

    isActive(item){
        return item==this.state.active;
    }

    render() {
      var className = this.state.active
          ? 'product-filter-container has-active'
          : 'product-filter-container';

        return (
            <div className={className}>
                <ProductItem name="Sebze"     setActive={this.handleActive} active={this.isActive("Sebze")}/>
                <ProductItem name="Meyve"     setActive={this.handleActive} active={this.isActive("Meyve")}/>
                <ProductItem name="Et"        setActive={this.handleActive} active={this.isActive("Et")}/>
                <ProductItem name="Balik"     setActive={this.handleActive} active={this.isActive("Balik")}/>
                <ProductItem name="Kuru Gida" setActive={this.handleActive} active={this.isActive("Kuru Gida")}/>
            </div>
        );
    }
}

export default ProductFilter;
