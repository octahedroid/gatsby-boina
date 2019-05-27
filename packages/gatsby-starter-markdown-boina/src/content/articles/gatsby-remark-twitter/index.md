---
title: 'gatsby-remark-twitter'
date: '2019-05-03'
path: 'gatsby-remark-twitter'
content_type: 'article'
resume: ''
author: jmolivas
image: '../../assets/drupal-love-gatsby-blue.jpg'
overlay_color: 'blue-red-diagonal'
tags:
  - drupal
  - gatsby
published: true
---

# gatsby-remark-twitter

Embed Tweet cards in Gatsby markdown.

## Install

``` bash
npm install --save @weknow/gatsby-remark-twitter

```

## How to use

``` js
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: ["@weknow/gatsby-remark-twitter"]
    }
  }
];

```

If you want to get debug output, turn on the `debug` option in the
plugin options.

``` js
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "@weknow/gatsby-remark-twitter",
          options: {
            debug: true
          }
        }
      ]
    }
  }
];

```

## Usage

``` markdown
# Blog post title

This is an example of embedding a single tweet card.
Add any markdown as you normally do, and then insert a valid
Tweet link anywhere to automatically transform it into an
embed card.

https://twitter.com/gatsbyjs/status/1055939617646465024

You can embed several tweets

https://twitter.com/wesbos/status/1068597847237541888

https://twitter.com/dan_abramov/status/1068884262273933312

```

> **NOTE:** Make sure to copy the Tweet link instead of the embed code.

## How this looks like

You can embed a single tweet

https://twitter.com/gatsbyjs/status/1055939617646465024

You can embed several tweets

https://twitter.com/wesbos/status/1068597847237541888

https://twitter.com/dan_abramov/status/1068884262273933312
