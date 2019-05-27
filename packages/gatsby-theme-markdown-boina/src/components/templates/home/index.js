import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import _slice from 'lodash/slice';

import Hero from '../../molecules/hero';
import ArticleTeaser from '../../molecules/article-teaser';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: _slice(props.articles, 0, 6),
      hasMoreItems: true,
    };
  }

  loadItems = (page) => {
    const allArticles = _slice(this.props.articles, 0, 6*(page+1));
    this.setState({
      articles: allArticles,
      hasMoreItems: (this.props.articles.length>=6*page+1)? true : false
    })
  }

  render() {
    const { articles } = this.state;
    const { field_name, field_slogan, social_profiles } = this.props.settings;
    const imageHero = this.props.heroCover;

    const loader = <div className="cell medium-12 align-center" key="loader">Loading ...</div>;
    return (
      <div className="c-home ">
        <Hero
          title={field_name}
          tagline={field_slogan}
          image={imageHero}
          color="purple"
          social={social_profiles}
        />
        <div className="grid-container u-push-top--inside--4x u-push-bottom--inside--4x">
          <InfiniteScroll className="grid-x grid-margin-x" key="inf-scroll"
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={loader}
          >
              {articles.map(({ node }) => (
                <div className="cell medium-6 small-12 large-6 xlarge-6 u-push-bottom" key={node.id}>
                  <ArticleTeaser
                    title={node.frontmatter.title}
                    image={node.frontmatter.image.childImageSharp.fluid}
                    excerpt={node.excerpt}
                    link={node.frontmatter.path}
                    date={node.frontmatter.date}
                  />
                </div>
              ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  articles: PropTypes.array,
  settings: PropTypes.object,
  heroCover: PropTypes.object
};

export default Home;
