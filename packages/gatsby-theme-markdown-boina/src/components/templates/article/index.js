import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../layout';
import Hero from '../../molecules/hero';
import ArticleTeaser from '../../molecules/article-teaser';
import Disqus from '../../atoms/disqus';
import Share from '../../atoms/share';
import './style.scss';

const ArticlePage = ({ data }) => {
  const { domain } = data.site.siteMetadata;
  const info = data.markdownRemark;

  return (
    <Layout
      showFooterCta
      postUrl={`${domain}${info.fields.slug}`}
      postSlug={info.frontmatter.path}
      postTitle={info.frontmatter.title}
      postDesc={info.excerpt}
      postDate={info.frontmatter.date}
      postImage={`${domain}${info.frontmatter.image.childImageSharp.fluid.src}`}
      isBlogPost
    >
      <Hero
        title={info.frontmatter.title}
        image={info.frontmatter.image.childImageSharp.fluid}
        color={info.frontmatter.overlay_color}
        info={`By ${info.frontmatter.author.name} ● ${data.dataYaml.slogan} | ${info.frontmatter.date}`}
      />
      <div className="c-article u-push-top--inside--4x u-push-bottom--inside--4x">
        <div className="grid-container align-center grid-x">
          <div className="c-article__content cell small-11 medium-12 large-10 xlarge-10">
            <div className="c-article__content" dangerouslySetInnerHTML={{ __html: info.html }} />
            <div className="c-article__tags">
              {
              (!info.frontmatter.tags) ? null
                : info.frontmatter.tags.map((tag, index) => (
                  <span key={tag.url}>
                    <Link key={tag.url} to={`/tags/${tag.url}`}>
                      {`${tag.id}`}
                    </Link>
                    {(index + 1 !== info.frontmatter.tags.length) ? <span>,&nbsp;</span> : ''}
                  </span>
                ))
            }
            </div>
            <Share shareUrl={`${domain}${info.fields.slug}`} shareTitle={info.frontmatter.title} sharehandler={data.dataYaml.twitter_handle} />
          </div>
          <div className="cell small-11 medium-12 large-12">
            {/* {!data.markdownRemark.relationships.field_related_post ? null : (
              <div className="c-article__related-post">
                <div className="">
                  <h3>Related Posts</h3>
                  <div className="grid-x grid-margin-x">
                    {data.markdownRemark.relationships.field_related_post.map(node => (
                      <div className="cell small-6 medium-6 large-4 u-push-bottom" key={node.id}>
                        <ArticleTeaser
                          title={node.frontmatter .title}
                          image={node.frontmatter.image.childImageSharp.fluid}
                          resume={node.frontmatter.resume}
                          excerpt={node.excerpt}
                          link={node.frontmatter.path}
                          date={node.frontmatter.date}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        } */}
            <div className="">
              <Disqus
                articleId={`${domain}${info.fields.slug}`}
                title={info.frontmatter.title}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ArticlePage;

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        domain
      }
    }
    dataYaml {
      slogan
      twitter_handle
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        resume
        date
        overlay_color
        author {
          id
          name
          bio
          twitter
          website
        }
        tags {
          id
          url
        }
        image {
          childImageSharp {
            fluid {
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
`;

ArticlePage.propTypes = {
  data: PropTypes.object
};

ArticlePage.defaultProps = {
  data: null
};
