import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
<footer className="mt-20 text-center text-gray-500">
  <p className="whitespace-nowrap">
    •───────•made with {' '}
    <span className="inline-block mx-1">
      <FontAwesomeIcon icon={faHeart} />
    </span> 
    {' '}and chai{' '}
    <span className="inline-block mx-1">
      <FontAwesomeIcon icon={faMugHot} />
    </span>
    •───────•
  </p>
</footer>

);

export default Footer;
