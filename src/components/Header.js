import Navigation from './Navigation';
import SearchBar from './SearchBar';
import './Header.css';
import React, { Component } from 'react';


export class Header extends Component {
    render() {
        return (
            <div className="head">
                <Navigation/>
                <SearchBar/>
            </div>
        )
    }
}

export default Header
