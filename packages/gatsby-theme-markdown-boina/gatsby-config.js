const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

//* @TODO
module.exports = {
  siteMetadata: {
    title: `${process.env.SITE_NAME}`,
    domain: `${process.env.PROJECT_URL}`
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
    'MarkdownRemark.frontmatter.tags': 'TagsYaml'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'static_images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${process.env.CONTENT_PATH}/data`,
        name: 'data'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${process.env.CONTENT_PATH}/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${process.env.CONTENT_PATH}/articles`,
        name: 'articles'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${process.env.CONTENT_PATH}/pages`,
        name: 'pages'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          '@weknow/gatsby-remark-twitter',
          'gatsby-remark-embed-video',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              includeDefaultCss: true
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              withWebp: true,
              maxWidth: 790,
              linkImagesToOriginal: false,
              quality: 70
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              aliases: {},
              showLineNumbers: true
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.TRACKING_ID}`,
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `${process.env.SITE_NAME}`,
        short_name: `${process.env.SHORT_NAME}`,
        start_url: '/',
        background_color: '#eaeaea',
        theme_color: '#644b78',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'static/icon.png') // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Josefin+Sans:300,400,700',
          'Signika:100,300,400,700' // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { allMarkdownRemark } }) => allMarkdownRemark.edges.map(edge => Object.assign({}, edge.node.id, {
              id: edge.node.id,
              description: edge.node.excerpt,
              title: edge.node.frontmatter.title,
              url: `${process.env.PROJECT_URL}/${edge.node.fields.slug}`,
              guid: `${process.env.PROJECT_URL}/${edge.node.fields.slug}`,
              custom_elements: [{ pubDate: edge.node.frontmatter.date }]
            })),
            query: `
            {
              allMarkdownRemark(sort: {
                fields: [frontmatter___date],
                order: DESC
              }) {
                edges {
                  node {
                    id
                    html
                    frontmatter {
                      title
                      path
                      date
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
            `,
            output: `${process.env.DRUPAL_RSS_FEED_FILE}`,
            title: `${process.env.SITE_NAME}`
          }
        ]
      }
    }
  ]
};
