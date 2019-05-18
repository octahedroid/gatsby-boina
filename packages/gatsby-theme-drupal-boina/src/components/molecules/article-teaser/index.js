import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import './style.scss';

const Article = ({
  title, image, resume, excerpt, link, date
}) => (
  <div className="c-article-teaser">
    <div className="c-article-teaser__image">
      <Link to={link}>
        <Img
          fluid={
            image
          }
        />
      </Link>
    </div>
    <h2 className="c-article-teaser__title">
      <Link to={link}>{title}</Link>
    </h2>
    {!resume ? null : <p className="c-article-teaser__resume">{resume}</p>}
    <p className="c-article-teaser__date">{date}</p>
    <p className="c-article-teaser__excerpt">{excerpt}</p>
    <Link className="c-article-teaser__link" to={link}>
      - Read
      <strong> more</strong>
    </Link>
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  resume: PropTypes.string,
  link: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string
};

Article.defaultProps = {
  title: '',
  image: '',
  resume: '',
  link: '',
  excerpt: '',
  date: ''
};
export default Article;
