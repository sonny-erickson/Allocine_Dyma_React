import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">AlloMovie</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">Favoris</a>
                        </li>
                    </ul>

                </div>
            </header>
        )
    }
}
