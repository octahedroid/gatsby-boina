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
      articles: _slice(props.data.allNodeArticle.edges, 0, 6),
      hasMoreItems: true,
    };
  }

  loadItems = (page) => {
    const allArticles = _slice(this.props.articles, 0, 6*(page+1));
    this.setState({
      articles: allArticles,
      hasMoreItems: (this.props.data.allNodeArticle.edges.length>=6*page+1)? true : false
    })
  }

  render() {
    const articles = this.props.data.allNodeArticle.edges;
    const tagTitle = this.props.data.taxonomyTermTags.name;
    const tagPath = this.props.data.taxonomyTermTags.path.alias;
    const {domain} = this.props.data.site.siteMetadata;
    const loader = <div className="cell medium-12 align-center" key="loader">Loading ...</div>;
    return (
      <Layout darkMenu
        postUrl={`${domain}/tags${tagPath}`}
        postTitle={`Tag: ${tagTitle}`}
        postDesc={this.props.data.allSiteSettingEntitySite.edges[0].node.field_description}
        postDate={dateFormat(new Date(), 'MMMM Do, YYYY')}
      >
        <div className="c-tags u-push-top--inside--9x u-push-bottom--inside--4x">
          <div className="grid-container align-center u-push-bottom--inside--3x">
            <h1 className="c-tags__title cell medium-8 large-8 u-text--primary align-center grid-x">{tagTitle}</h1>
          </div>
          <div className="grid-container align-center">
          {!articles?null:
            <InfiniteScroll className="grid-x grid-margin-x"
              pageStart={0}
              loadMore={this.loadItems.bind(this)}
              hasMore={this.state.hasMoreItems}
              loader={loader}
            >
              {articles.map(({ node }) => (
                <div className="cell medium-6 small-12 large-6 xlarge-6 u-push-bottom" key={node.id}>
                  <ArticleTeaser
                    title={node.title}
                    image={node.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid}
                    resume={node.field_resume}
                    excerpt={node.fields.markdownBody.childMarkdownRemark.excerpt}
                    link={node.path.alias}
                    date={node.fields.created_formatted}
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
  query($slug: String!) {
    site{
      siteMetadata{
        domain
      }
    }
    allSiteSettingEntitySite {
      edges {
        node {
          field_name
          field_slogan
          field_description
        }
      }
    }
    taxonomyTermTags( path: {alias: {eq: $slug}} ){
      id
      name
    	path{
        alias
      }
    }
    allNodeArticle(
      filter:{
        relationships:{
          field_tags:{
            elemMatch: {
              path: {alias: {eq: $slug}}
            }
          }
        }
      }
      sort: {
        fields: created, order: DESC
      }
    ){
      edges {
        node {
          id
          title
          path {
            alias
          }
          fields {
            slug
            created_formatted
            markdownBody {
              childMarkdownRemark {
                excerpt
              }
            }
          }
          relationships {
            field_image {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 600, maxHeight: 400, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

