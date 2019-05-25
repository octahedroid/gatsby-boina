import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import InfiniteScroll from 'react-infinite-scroller';
import _slice from 'lodash/slice';
import Layout from '../layout';
import ArticleTeaser from '../../molecules/article-teaser';
import './style.scss';

const dateFormat = require('date-fns/format');

class TagsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: _slice(props.data.allMarkdownRemark.edges, 0, 6),
      hasMoreItems: true,
    };
  }

  loadItems = (page) => {
    const allArticles = _slice(this.props.articles, 0, 6*(page+1));
    this.setState({
      articles: allArticles,
      hasMoreItems: (this.props.data.allMarkdownRemark.edges.length >= 6*page+1) ? true : false
    })
  }

  render() {
    const articles = this.props.data.allMarkdownRemark.edges;
    const tagTitle = this.props.data.taxonomyTermTags.name;
    const tagPath = this.props.data.taxonomyTermTags.path.alias;
    const { domain } = this.props.data.site.siteMetadata;
    const loader = <div className="cell medium-12 align-center" key="loader">Loading ...</div>;
    return (
      <Layout darkMenu
        postUrl={`${domain}/tags/${tagPath}`}
        postTitle={`Tag: ${tagTitle}`}
        postDesc={this.props.data.dataYaml.description}
        postDate={dateFormat(new Date(), 'MMMM Do, YYYY')}
      >
        <div className="c-tags u-push-top--inside--9x u-push-bottom--inside--4x">
          <div className="grid-container align-center u-push-bottom--inside--3x">
            <h1 className="c-tags__title cell medium-8 large-8 u-text--primary align-center grid-x">{tagTitle}</h1>
          </div>
          <div className="grid-container align-center">
          { !articles ? null :
            <InfiniteScroll className="grid-x grid-margin-x"
              pageStart={0}
              loadMore={this.loadItems.bind(this)}
              hasMore={this.state.hasMoreItems}
              loader={loader}
            >
              { articles.map(({ node }) => (
                <div className="cell medium-6 small-12 large-6 xlarge-6 u-push-bottom" key={node.id}>
                  <ArticleTeaser
                    title={node.frontmatter.title}
                    image={node..frontmatter.image.childImageSharp.fluid}
                    resume={node.excerpt}
                    excerpt={node.excerpt}
                    link={node.frontmatter.path}
                    date={node.frontmatter.date}
                  />
                </div>
              ))}
            </InfiniteScroll>
          }
          </div>
        </div>
      </Layout>
    )
  }
}

TagsPage.propTypes = {
  data: PropTypes.object
};

TagsPage.defaultProps = {
  data: null
};

export default TagsPage;

export const query = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        domain
      }
    }
    dataYaml {
      name
      slogan
      description
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            path
            date
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
