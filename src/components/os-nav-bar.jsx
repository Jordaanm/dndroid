import React from 'react';
import "./os-nav-bar.scss";
import { useStores } from '../utils/contexts';

export const OSNavBar = props => {

    const {os} = useStores();
    const goHome = () => { os.currentApp = null };

    return (
        <div className="nav-bar">
            <div className="back" onClick={goHome}>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <span className="home"></span>
            <span className="recent"></span>
        </div>
    );
}