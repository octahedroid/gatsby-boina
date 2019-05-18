import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import _slice from 'lodash/slice'

import Hero from '../../molecules/hero'
import ArticleTeaser from '../../molecules/article-teaser'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: _slice(props.articles, 0, 6),
      hasMoreItems: true,
    }
  }

  loadItems = (page) => {
    const allArticles = _slice(this.props.articles, 0, 6 * (page + 1))
    this.setState({
      articles: allArticles,
      hasMoreItems: this.props.articles.length >= 6 * page + 1 ? true : false,
    })
  }

  render() {
    const { articles } = this.state
    const {
      field_name,
      field_slogan,
      field_facebook,
      field_twitter,
      field_github,
      field_linkedin,
    } = this.props.settings
    const imageHero = this.props.heroCover
    const socialLinks = {
      facebook: field_facebook.uri,
      twitter: field_twitter.uri,
      github: field_github.uri,
      linkedin: field_linkedin.uri,
    }
    const loader = (
      <div className="cell medium-12 align-center" key="loader">
        Loading ...
      </div>
    )
    return (
      <div className="c-home ">
        <Hero
          title={field_name}
          tagline={field_slogan}
          image={imageHero}
          color="purple"
          social={socialLinks}
        />
        <div className="grid-container u-push-top--inside--4x u-push-bottom--inside--4x">
          <InfiniteScroll
            className="grid-x grid-margin-x"
            key="inf-scroll"
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={loader}
          >
            {articles.map(({ node }) => (
              <div
                className="cell medium-6 small-12 large-6 xlarge-6 u-push-bottom"
                key={node.id}
              >
                <ArticleTeaser
                  title={node.title}
                  image={
                    node.relationships.field_image.relationships
                      .field_media_image.localFile.childImageSharp.fluid
                  }
                  resume={node.field_resume}
                  excerpt={node.fields.markdownBody.childMarkdownRemark.excerpt}
                  link={node.path.alias}
                  date={node.fields.created_formatted}
                />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.array,
  settings: PropTypes.object,
  heroCover: PropTypes.object,
}

export default Home
