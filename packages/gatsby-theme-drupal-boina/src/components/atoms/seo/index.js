import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const config = {
  title: '',
  logo: '',
  url: '',
  twitter: ''
};

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished,
  siteUrl
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: config.title
    }
  ];

  return isBlogPost
    ? [
      ...schemaOrgJSONLD,
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': url,
              name: title,
              image
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url,
        name: title,
        alternateName: config.title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image
        },
        description,
        author: {
          '@type': 'Person',
          name: 'Jesus Manuel Olivas'
        },
        publisher: {
          '@type': 'Organization',
          url: siteUrl,
          logo: config.logo,
          name: 'Jesus Manuel Olivas'
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': config.url
        },
        datePublished
      }
    ]
    : schemaOrgJSONLD;
};

const SEO = ({
  postData, postImage, isBlogPost, keywords
}) => {
  const title = postData.title || config.title;
  const description = postData.description || postData.excerpt || config.description;
  const image = postImage || config.image;
  const { url } = postData;
  const datePublished = isBlogPost ? postData.datePublished : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    url,
    title,
    image,
    description,
    datePublished
  });

  return (
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords }
      ]}
    >
      {/* General tags */}
      <meta name="image" content={image} />
      <meta name="description" content={description} />
      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* <meta property="fb:app_id" content={config.fbAppID} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={postData.twitterHandler} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <html lang="en" />
    </Helmet>
  );
};

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    frontmatter: PropTypes.any,
    excerpt: PropTypes.any
  }).isRequired,
  keywords: PropTypes.string,
  postImage: PropTypes.string,
  siteUrl: PropTypes.string
};

SEO.defaultProps = {
  isBlogPost: false,
  postImage: null,
  keywords: '',
  siteUrl: ''
};

export default SEO;
