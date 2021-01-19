import './SearchBar.css';

import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div id="search">
                <label htmlFor="">Search :</label>
                <input type="text"/>
                <button>Go</button>
            </div>
        )
    }
}

export default SearchBar
