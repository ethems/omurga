import React, {Component} from 'react';


class LocationFilter extends Component {

    render() {
        return (
            <div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
                 <input className="mdl-textfield__input " type="text" id="sample3"/>
                 <label className="mdl-textfield__label" for="sample3">Sehir veya Ilce</label>
               </div>
            </div>
        );
    }
}

export default LocationFilter;
