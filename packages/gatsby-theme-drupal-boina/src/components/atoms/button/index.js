import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = (props) => {
  const {
    onClick, children, className, link
  } = props;

  return (
    <button className={`c-button ${className} ${link ? 'c-button--link' : ''}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  children: null,
  className: '',
  link: false
};

export default Button;
