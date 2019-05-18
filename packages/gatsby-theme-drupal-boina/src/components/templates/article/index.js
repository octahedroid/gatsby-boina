import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../layout'
import Hero from '../../molecules/hero'
import ArticleTeaser from '../../molecules/article-teaser'
import Disqus from '../../atoms/disqus'
import Share from '../../atoms/share'
import './style.scss'

const ArticlePage = ({ data }) => {
  const { domain } = data.site.siteMetadata
  return (
    <Layout
      showFooterCta
      postUrl={`${domain}${data.nodeArticle.path.alias}`}
      postSlug={data.nodeArticle.path.alias}
      postTitle={data.nodeArticle.title}
      postDesc={
        data.nodeArticle.fields.markdownBody.childMarkdownRemark.excerpt
      }
      postDate={data.nodeArticle.fields.created_formatted}
      postImage={`${domain}${
        data.nodeArticle.relationships.field_image.relationships
          .field_media_image.localFile.childImageSharp.fluid.src
      }`}
      isBlogPost
    >
      <Hero
        title={data.nodeArticle.title}
        image={
          data.nodeArticle.relationships.field_image.relationships
            .field_media_image.localFile.childImageSharp.fluid
        }
        color={data.nodeArticle.field_overlay_color}
        info={`By ${data.allSiteSettingEntitySite.edges[0].node.field_name} ● ${
          data.allSiteSettingEntitySite.edges[0].node.field_slogan
        } | ${data.nodeArticle.fields.created_formatted}`}
      />
      <div className="c-article u-push-top--inside--4x u-push-bottom--inside--4x">
        <div className="grid-container align-center grid-x">
          <div className="c-article__content cell small-11 medium-12 large-10 xlarge-10">
            <div
              className="c-article__content"
              dangerouslySetInnerHTML={{
                __html:
                  data.nodeArticle.fields.markdownBody.childMarkdownRemark.html,
              }}
            />
            <div className="c-article__tags">
              {!data.nodeArticle.relationships.field_tags
                ? null
                : data.nodeArticle.relationships.field_tags.map(
                    (tag, index) => (
                      <span key={tag.path.alias}>
                        <Link
                          key={tag.path.alias}
                          to={`/tags${tag.path.alias}`}
                        >
                          {`${tag.name}`}
                        </Link>
                        {index + 1 !==
                        data.nodeArticle.relationships.field_tags.length ? (
                          <span>,&nbsp;</span>
                        ) : (
                          ''
                        )}
                      </span>
                    )
                  )}
            </div>
            <Share
              shareUrl={`${domain}${data.nodeArticle.path.alias}`}
              shareTitle={data.nodeArticle.title}
              sharehandler={
                data.allSiteSettingEntitySite.edges[0].node.field_twitter_handle
              }
            />
          </div>
          <div className="cell small-11 medium-12 large-12">
            {!data.nodeArticle.relationships.field_related_post ? null : (
              <div className="c-article__related-post">
                <div className="">
                  <h3>Related Posts</h3>
                  <div className="grid-x grid-margin-x">
                    {data.nodeArticle.relationships.field_related_post.map(
                      (node) => (
                        <div
                          className="cell small-6 medium-6 large-4 u-push-bottom"
                          key={node.id}
                        >
                          <ArticleTeaser
                            title={node.title}
                            image={
                              node.relationships.field_image.relationships
                                .field_media_image.localFile.childImageSharp
                                .fluid
                            }
                            resume={node.field_resume}
                            excerpt={
                              node.fields.markdownBody.childMarkdownRemark
                                .excerpt
                            }
                            link={node.path.alias}
                            date={node.fields.created_formatted}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className="">
              <Disqus
                articleId={`${domain}${data.nodeArticle.path.alias}`}
                title={data.nodeArticle.title}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ArticlePage

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        domain
      }
    }
    allSiteSettingEntitySite {
      edges {
        node {
          field_name
          field_slogan
          field_twitter_handle
        }
      }
    }
    nodeArticle(fields: { slug: { eq: $slug } }) {
      title
      path {
        alias
      }
      field_overlay_color
      fields {
        slug
        created_formatted
        markdownBody {
          childMarkdownRemark {
            html
            rawMarkdownBody
            excerpt
          }
        }
      }
      relationships {
        field_tags {
          name
          path {
            alias
          }
        }
        field_image {
          relationships {
            field_media_image {
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1440, maxHeight: 560, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        field_related_post {
          id
          title
          field_resume
          path {
            alias
          }
          fields {
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
`

ArticlePage.propTypes = {
  data: PropTypes.object,
}

ArticlePage.defaultProps = {
  data: null,
}
