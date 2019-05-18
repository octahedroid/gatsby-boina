import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({ articleId, title }) => {
  const disqusConfig = {
    identifier: articleId,
    title
  };
  return (<StaticQuery
    query={graphql`{
      allSiteSettingEntitySite {
        edges {
          node {
            field_disqus_shortname
          }
        }
      }
    }
    `}
    render={(data) => {
      const { field_disqus_shortname: disqusShortName } = data.allSiteSettingEntitySite.edges[0].node;
      return (
        <div className="c-disqus cell auto align-self-middle align-self-center">
          <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
        </div>
      );
    }}
  />
  );
};

Disqus.propTypes = {
  articleId: PropTypes.string.isRequired,
  title: PropTypes.string
};

Disqus.defaultProps = {
  title: ''
};
export default Disqus;
