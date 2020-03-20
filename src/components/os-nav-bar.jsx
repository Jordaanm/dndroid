import React from 'react';
import "./os-nav-bar.scss";

export const OSNavBar = props => {
    return (
        <div className="nav-bar">
            <div className="back">
            <span></span>
            <span></span>
            <span></span>
            </div>
            <span className="home"></span>
            <span className="recent"></span>
        </div>
    );
}