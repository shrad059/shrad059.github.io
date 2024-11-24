import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="footer text-center text-gray-500" style={{ padding: '5px 0', fontSize: '0.85rem' }}>
    <p className="whitespace-nowrap" style={{ margin: '0' }}>
      •───────made with <span> </span>
      <span className="inline-block">
        <FontAwesomeIcon icon={faHeart} />
      </span>
      <span> </span>and chai<span> </span>
      <span className="inline-block">
        <FontAwesomeIcon icon={faMugHot} />
      </span>───────•
    </p>
  </footer>
);

export default Footer;
