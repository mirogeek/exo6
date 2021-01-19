import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import './Body.css';
import React, { Component } from 'react';

export class Body extends Component {
    render() {
        return (
            <div className="body">
                <body>
                    <Header />
                    <Article/>
                    <Article/>
                    <Footer/>
                </body>
            </div>
        )
    }
}

export default Body
