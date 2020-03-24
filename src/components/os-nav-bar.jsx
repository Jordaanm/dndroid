import React from 'react';
import "./os-nav-bar.scss";
import { useStores } from '../utils/contexts';

export const OSNavBar = props => {

    const {os} = useStores();
    const goHome = () => { os.launchApp('home'); };
    const goBack = () => { os.goBack(); };
    const toggleAppList = () => { os.toggleAppList(); };
    return (
        <div className="nav-bar">
            <div className="back" onClick={goBack}>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <span className="home" onClick={goHome}></span>
            <span className="recent" onClick={toggleAppList}></span>
        </div>
    );
}