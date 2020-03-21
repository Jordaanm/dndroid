import React, { useEffect, useState } from 'react';
const moment = require('moment');

const getTimeString = () => {
    return moment().format('h:mmA');
}

export const Clock = props => {
    const [now, setNow] = useState(getTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(getTimeString());
        }, 10000);
        return () => clearInterval(timer);
    });

    return (
        <span className="time">{now}</span>
    );

};