import './Article.css';
import React, { Component } from 'react'

export class Article extends Component {
    render() {
        return (
            <div id="test1">
                <div className="test2">
                    <img src="../tartines.jpeg" alt="" height="200"/>
                </div>
                <div className="test3">
                    <h1>Mon premier article</h1>
                    <p>lorem10</p>
                </div>
            </div>
        )
    }
}

export default Article
