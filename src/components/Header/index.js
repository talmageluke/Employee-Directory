import React, { Component } from 'react'
import "./Header.scss"
import logo from "../../assets/logo.png"

export default class Header extends Component {
    render() {
        return (
            <div className="header" style={{ zIndex: '100' }}>
                <img src={logo} alt="Logo" />
                <p>Employee Directory</p>
                <p className="alt_text">ED</p>
            </div>
        )
    }
}
