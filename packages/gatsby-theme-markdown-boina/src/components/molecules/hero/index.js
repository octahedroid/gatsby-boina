import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './style.scss';

const Hero = ({
  title, image, color, tagline, info, social
}) => (
  <div className="c-hero grid-x align-center-middle">
    {!image ? null : (
      <div className="c-hero__image">
        <Img fluid={image} alt={`Hero image for: ${title}`} style={{ minHeight: '25rem' }} imgStyle={{ minHeight: '25rem' }} />
      </div>
    )}
    <div className={`c-hero__cover c-hero__cover--${color}`} />
    <div className="c-hero__content cell small-11 medium-10 large-6 grid-x align-center-middle u-text-align-center">
      <h2 className="cell">{title}</h2>
      {!tagline ? null : <h3 className="cell c-hero__tagline">{tagline}</h3>}
      {!social ? null : (
        <div className="c-hero__social cell medium-6 large-8 grid-x align-center-middle">
          {(!social.facebook) ? null : (
            <a href={social.facebook} className="cell medium-1 small-2 large-1" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile">
              <svg aria-labelledby="simpleicons-facebook-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title id="simpleicons-facebook-icon">Facebook icon</title>
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
              </svg>
            </a>
          )}
          {(!social.twitter) ? null : (
            <a href={social.twitter} className="cell medium-1 small-2 large-1" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
              <svg aria-labelledby="simpleicons-twitter-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title id="simpleicons-twitter-icon">Twitter icon</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          )}
          {(!social.github) ? null : (
            <a href={social.github} className="cell medium-1 small-2 large-1" target="_blank" rel="noopener noreferrer" aria-label="Github profile">
              <svg aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title id="simpleicons-github-icon">GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}
          {(!social.linkedin) ? null : (
            <a href={social.linkedin} className="cell medium-1 small-2 large-1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <svg enableBackground="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                  <path d="M173.5,508.7c0-2.4,0-4.7,0-7c0-107.7,0-215.3,0-323c0-3-0.2-5.4,4.2-5.4c31.8,0.2,63.7,0.1,95.5,0.1   c0.8,0,1.6,0.2,2.9,0.4c0,14,0,27.8,0,41.7c0.4,0.1,0.7,0.3,1.1,0.4c4-5.2,7.8-10.6,12-15.7c12.2-15,27.5-26,45.5-32.6   c9.8-3.6,20.5-5.8,30.8-6.3c14.2-0.6,28.7-0.4,42.7,2c23,3.9,43.3,14.1,60.1,30.8c15.9,15.7,26.4,34.6,32.1,55.9   c3,11.3,4.9,22.9,6.7,34.4c1.2,8,1.8,16.2,1.8,24.2c0.1,65,0.1,130,0.1,195c0,1.6-0.1,3.2-0.2,5.3c-1.9,0-3.5,0-5.1,0   c-30.7,0-61.3-0.1-92,0.1c-5.1,0-6-1.7-6-6.3c0.1-59.8,0.3-119.7-0.1-179.5c-0.1-10.5-1.1-21.4-3.8-31.5   c-4.9-17.7-16.1-30.5-33.9-37c-15-5.5-30.2-6.5-45.6-2.6c-17,4.3-28.7,15.6-37.5,30.5c-6.8,11.5-8.1,24.2-8.2,36.9   c-0.4,60.7-0.2,121.3-0.2,182c0,2.3,0,4.6,0,7.1C241.9,508.7,208,508.7,173.5,508.7z" />
                  <path d="M109.1,342.6c0,53.3-0.1,106.6,0.1,159.9c0,4.8-1,6.6-6.3,6.5c-30.5-0.3-61-0.3-91.5,0c-5,0-6.1-1.7-6.1-6.3   c0.1-107.1,0.1-214.3,0-321.4c0-4.3,1.2-5.8,5.6-5.8c30.8,0.2,61.6,0.2,92.5,0c4.8,0,5.7,1.8,5.7,6.1   C109.1,235.3,109.1,289,109.1,342.6z" />
                  <path d="M56.1,4.8C89,4,108.7,27.9,108.8,57.2c0.1,30-20.9,52.4-53.9,52.3c-30.7,0-52.4-22-52.3-53.1C2.7,27.3,23.8,3.8,56.1,4.8z" />
                </g>
              </svg>
            </a>
          )}
        </div>
      )}
      {!info ? null : <p className="cell c-hero__info u-push-top--3x">{info}</p>}
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  color: PropTypes.string,
  tagline: PropTypes.string,
  info: PropTypes.string,
  social: PropTypes.object
};
Hero.defaultProps = {
  image: '',
  color: '#333',
  tagline: '',
  info: '',
  social: null
};

export default Hero;
