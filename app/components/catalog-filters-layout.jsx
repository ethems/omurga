import React, {Component} from 'react';
var MediaQuery = require('react-responsive');

class CatalogFilterLayout extends Component {

    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <div>You are a desktop or laptop</div>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <div>You are a tablet or mobile phone</div>
                </MediaQuery>
            </div>
        );
    }
}

export default CatalogFilterLayout;
