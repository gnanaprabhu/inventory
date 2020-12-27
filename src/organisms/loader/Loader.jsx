import React, { useState, useEffect } from 'react';

import defaultImageSrc from '../../assets/gif/loader.gif';
import {Timeout} from './timeout/Timeout';
import './Loader.scss';


export const Loader = props => {
  const {
    coverWholePage,
    children,
    delay,
    imageSrc,
    readyToRender,
    styling,
  } = props;
  const [shouldRender, setShouldRender] = useState(false);
  const [timeoutExpired, setTimeoutExpired] = useState(false);
  let timeout= undefined;
  useEffect(() => {
    timeout = new Timeout(() => setTimeoutExpired(true), delay || 0);

    return timeout.clear;
  }, []);
  const timeoutCast = timeout ;
  if (readyToRender && timeoutExpired && !shouldRender) {
    setShouldRender(true);
  } else if (shouldRender && !readyToRender && timeoutExpired) {
    setShouldRender(false);
    setTimeoutExpired(false);
    timeoutCast?.restart();
  }

  if (shouldRender) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <div
      className={`loading-container ${coverWholePage ? 'cover-all' : ''}`}
      style={styling?.container || {}}
    >
      <img
        className="gif-image"
        src={imageSrc}
        alt="Loader"
        style={styling?.loader || {}}
      />
    </div>
  );
};

Loader.defaultProps = {
  children: null,
  coverWholePage: true,
  delay: 250,
  imageSrc: defaultImageSrc,
  readyToRender: true,
  styling: {},
};
