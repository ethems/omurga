import React, {Component} from 'react';
var MediaQuery = require('react-responsive');

class CatalogFilterLayout extends Component {

    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 64.063em)'>
                    <div>You are a desktop or laptop</div>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 64.063em)'>
                  <MediaQuery query='(min-device-width: 40em)'>
                      <div>You are a tablet</div>
                  </MediaQuery>
                  <MediaQuery query='(max-device-width: 40em)'>
                      <div>You are a mobile</div>
                  </MediaQuery>
                </MediaQuery>
            </div>
        );
    }
}

export default CatalogFilterLayout;
