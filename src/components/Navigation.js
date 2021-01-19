import './Navigation.css';
import React, { Component } from 'react'

export class Navigation extends Component {
    render() {
        let link1 = () =>{
            console.log('Acceuil')
        };
        let link2 = () =>{
            console.log('Galerie')
        }
        let link3 = () =>{
            console.log('Contact')
        }
        return (
            <div id="nav">
                <button onClick={link1} id="link1">Link 1</button>
                <button onMouseOver={link2} id="link2">Link 2</button>
                <button onDoubleClick={link3} id="link3">Link 3</button>
            </div>
        )
    }
}

export default Navigation
