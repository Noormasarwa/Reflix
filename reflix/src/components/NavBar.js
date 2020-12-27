import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {

    render() {
        return (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li style = {{ float: "right"}} ><a  >Reflix</a></li>
            </ul>
        )
    }
}

export default NavBar;
