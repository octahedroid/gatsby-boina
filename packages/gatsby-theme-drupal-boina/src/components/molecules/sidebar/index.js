import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './style.scss';

import Button from '../../atoms/button';

const Sidebar = ({ showSidebar, hideSidebar }) => (
  <>
    <div className={`c-sidebar__cover ${showSidebar ? 'c-sidebar__cover--active' : ''}`} onClick={hideSidebar} role="button" aria-label="Close" tabIndex="0" />
    <div className={`c-sidebar grid-x align-top ${showSidebar ? 'c-sidebar--active' : ''}`}>
      <div className="cell medium-12 grid-x align-right u-push-top--inside--2x u-push-right--inside--2x u-push-bottom--inside--2x">
        <Button link className="c-sidebar__close" onClick={hideSidebar} aria-label="Close">
          <svg viewBox="136.09100341796875 58.95399856567383 134.19000244140625 134.19000244140625" xmlns="http://www.w3.org/2000/svg">
            <path d="M 136.091 61.084 L 268.151 193.144 L 270.281 190.588 L 138.647 58.954 L 136.091 61.084 Z" />
            <path d="M 137.967 59.939" />
            <path d="M 136.091 191.014 L 268.151 58.954 L 270.281 61.51 L 138.647 193.144 L 136.091 191.014 Z" transform="matrix(-1, 0, 0, -1, 406.372006, 252.097996)" />
            <path d="M 268.965 191.856" />
          </svg>
          <span>close</span>
        </Button>
      </div>
      <div className="c-sidebar__menu cell medium-12 grid-x align-center">
        <div className="cell small-10 medium-8">
          <ul className="o-list-bare u-push-bottom--6x">
            <li>
              <Link className="c-sidebar__link" to="/">Home</Link>
            </li>
            <li>
              <Link className="c-sidebar__link" to="/about">About</Link>
            </li>
          </ul>

          <a className="c-sidebar__cta" target="_blank" rel="noopener noreferrer" href="#">Some CTA</a>
        </div>
      </div>
    </div>
  </>
);

Sidebar.propTypes = {
  showSidebar: PropTypes.bool,
  hideSidebar: PropTypes.func
};

export default Sidebar;
