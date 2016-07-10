import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';

const locations = [
    {
        name: 'Istanbul'
    }, {
        name: 'Istanbul2'
    }, {
        name: 'Istanbul3'
    }, {
        name: 'Istanbul4'
    }, {
        name: 'Istanbul5'
    }, {
        name: 'Istanbul6'
    }, {
        name: 'Ankara'
    }, {
        name: 'Izmir'
    }, {
        name: 'uzun ad uzun ad uzun ad uzun ad uzun ad uzun ad uzun ad'
    }
];

function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
        ? []
        : locations.filter(loc => loc.name.toLowerCase().slice(0, inputLength) === inputValue);
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}

class LocationFilter extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: getSuggestions('')
        };

        this.onChange = this.onChange.bind(this);
        this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    }

    onChange(event, {newValue}) {
        this.setState({value: newValue});
    }

    onSuggestionsUpdateRequested({value}) {
        this.setState({suggestions: getSuggestions(value)});
    }

    render() {
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder: 'ornek: ( Kadikoy Hali )',
            value,
            onChange: this.onChange
        };

        return (
            <div className="location-filter-container">
              <label className="location-filter-text">Sehir,Ilce veya Hal adi</label>
              <div className="location-filter">
                <div className="location-filter-icon-container"><i className="material-icons location-filter-icon">location_on</i></div>
                <Autosuggest suggestions={suggestions} onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested} getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion} inputProps={inputProps}/>
              </div>
          </div>
        );
    }
}

export default LocationFilter;
