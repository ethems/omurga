import React, {Component} from 'react';

import CatalogDialog from './catalog-dialog';

class App extends Component {

    render() {
        return (
            <div className="mdl-layout__container">
                <div className="mdl-layout mdl-js-layout  mdl-layout--fixed-drawer mdl-layout--fixed-header">
                  <header className="mdl-layout__header mdl-color--light-blue-500">
                    <div role="button" tabindex="0" className="mdl-layout__drawer-button"><i className="material-icons">menu</i></div>
                    <div className="mdl-layout__header-row">
                      <CatalogDialog/>
                    </div>
                  </header>
                  <div className="mdl-layout__drawer mdl-color--white">
                    <header className="drawer-header">

                    </header>
                  </div>
                    <div className="small-4 medium-6 columns"></div>
                    <div className="small-4 medium-3 columns">
                        {this.props.children}
                    </div>
                    <div className="small-4 medium-3 columns"></div>
                </div>
            </div>
        );
    }
}

export default App;
