import React, {Component} from 'react';

class ProductItem extends Component {

    constructor(props) {
        super(props);
    }

    handleReturnBack(e){
      e.preventDefault();
       e.stopPropagation();
      this.props.setActive(null);
    }

    render() {
        var className = this.props.active
            ? 'product-item active'
            : 'product-item';

        return (
            <div className={className} onClick={() => {this.props.setActive(this.props.name) }}>
                <div className="product-content">
                    <button onClick={this.handleReturnBack.bind(this)} />
                    {this.props.name}
                </div>
            </div>
        );
    }
};

export default ProductItem;
