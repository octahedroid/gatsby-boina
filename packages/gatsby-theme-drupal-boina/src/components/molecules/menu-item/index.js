import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import _first from 'lodash/first';
import _has from 'lodash/has';
import _find from 'lodash/find';

import './style.scss';

export default class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentSelected: false
    }
  }

  componentDidMount() {
    const { category, location } = this.props;
    const parentSelected = _find(category.categoryPages, ({ node }) => (_has(location, 'pathname') && node.path.alias === location.pathname.replace(/\/$/, "")));
    this._setParentSelection(parentSelected?true:false);
  }

  _setParentSelection = (parentSelection) => {
    this.setState({parentSelected: parentSelection});
  }

  render() {
    const { category, location } = this.props;
    const { node: firstContent = null } = _has(_first(category.categoryPages), 'node') ? _first(category.categoryPages) : {};
    const firstContentLink = (firstContent) ? firstContent.path.alias : '/#';
    const parentSelected = _find(category.categoryPages, ({ node }) => {
      return (_has(location, 'pathname') && node.path.alias === location.pathname.replace(/\/$/, ""));
    });
    return (
      <li
        onClick={()=>this._setParentSelection(!this.state.parentSelected)}
        className={`c-menu-item o-list-bare c-menu-item__parent ${(parentSelected||this.state.parentSelected) ? 'c-menu-item__parent--selected' : ''}`}>
        <span
          className="c-menu-item__link u-tiny-text u-border--bottom grid-x align-middle">
          {category.name}
        </span>
        <ul className="c-menu-item__submenu">
          {(
            category.categoryPages.map(({ node }) => {
            const currentPageSelected = (_has(location, 'pathname') && location.pathname.replace(/\/$/, "")===node.path.alias)?'c-menu-item__link--active':''
            return (
              <li key={node.id} className="o-list-bare u-border--bottom">
                <Link className={`c-menu-item__link u-tiny-text ${currentPageSelected}`} activeClassName="c-menu-item__link--active" to={node.path.alias}>{node.title}</Link>
              </li>
            )})
          )}
        </ul>
      </li>
    );
  }
}

MenuItem.propTypes = {
  category: PropTypes.object
};

MenuItem.defaultProps = {
  category: {}
};
