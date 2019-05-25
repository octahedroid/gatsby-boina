import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/templates/layout';
import Home from '../components/templates/home';

const dateFormat = require('date-fns/format');

const IndexPage = () => (
  <StaticQuery
    query={graphql`{
      site {
        siteMetadata {
          domain
        }
      }
      dataYaml {
        name
        slogan
        description
        social_profiles {
          facebook
          twitter
          github
          linkedin
        }
      }
      file(relativePath: { eq: "hero-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 560, cropFocus: CENTER) {
            src
          }
        }
      }
      allMarkdownRemark(
        limit: 999, 
        sort: {fields: [frontmatter___date], order: DESC}
        filter: { frontmatter: { content_type: { eq: "article" } } }
      ) {
        edges {
          node {
            html
            excerpt
            frontmatter {
              title
              path
              resume
              date
              image {
                childImageSharp {
                  fluid(maxWidth: 600, maxHeight: 400, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `}
    render={(data) => {
      const articles = data.allMarkdownRemark.edges;
      const settings = data.dataYaml;
      const cover = data.file.childImageSharp.fluid;
      const { domain } = data.site.siteMetadata;
      return (
        <Layout
          postUrl={domain}
          postTitle={settings.name}
          postDesc={settings.description}
          postDate={dateFormat(new Date(), 'MMMM Do, YYYY')}
          postImage={`${domain}${cover.src}`}
          heroCover
        >
          <div className="cell medium-cell-block">
            <Home articles={articles} settings={settings} heroCover={cover} />
          </div>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
