import React, { useState } from 'react';
import { useStores } from '../utils/contexts';

import "./lock-screen.scss";

export const LockScreen = props => {
  const { os } = useStores();
  const [password, setPass] = useState('');
  const [message, setMessage] = useState('Enter Password to Unlock');
  const [isError, setIsError] = useState(false);
  const submit = () => {
    os.tryUnlock(password)
      .then(hero => {
        setMessage("Password Accepted. Welcome Back, Hero");
        setIsError(false);
      }).catch(msg => {
        setMessage(msg);
        os.voice.speak("Error: " + msg);
        setIsError(true);
      })
  }

  return (
    <div className="lockscreen">
      <div className="half-modal column flex-sa">
        <div className="center-content">
          <div className="lock-icon"></div>
        </div>
        <div className="center-content">
          <span className={`${isError?'error':''} message`}>{message}</span>
        </div>
        <div className="password-entry center-content column">
          <input
            className="input"
            type="text"
            id="os-password"
            placeholder="Password"
            value={password}
            onChange={(e => setPass(e.target.value))}
          />
          <button type="button" className="btn" onClick={submit}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};