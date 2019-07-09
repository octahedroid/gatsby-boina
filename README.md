# gatsby-boina

> The npm packages for the WeKnow Gatsby Boina Projects

## Project dependencies

- [node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/en/)
- [gatsby-cli](https://www.gatsbyjs.org/tutorial/part-zero/#install-gatsby-cli)

## Install dependencies

From project root execute:

```shell

yarn install
```

## Current packages

```
packages/
├── gatsby-starter-drupal-boina
├── gatsby-starter-markdown-boina
├── gatsby-theme-drupal-boina
└── gatsby-theme-markdown-boina
```

## Drupal starter commands

```
  - drupal:starter:build
      cd packages/gatsby-starter-drupal-boina && gatsby build
   - drupal:starter:clean
      cd packages/gatsby-starter-drupal-boina && gatsby clean
   - drupal:starter:develop
      cd packages/gatsby-starter-drupal-boina && gatsby develop
   - drupal:starter:serve
      cd packages/gatsby-starter-drupal-boina && gatsby serve
```

## Markdown starter commands

```
   - markdown:starter:build
      cd packages/gatsby-starter-markdown-boina && gatsby build
   - markdown:starter:clean
      cd packages/gatsby-starter-markdown-boina && gatsby clean
   - markdown:starter:develop
      cd packages/gatsby-starter-markdown-boina && gatsby develop
   - markdown:starter:serve
      cd packages/gatsby-starter-markdown-boina && gatsby serve
```

## Details about development dependencies

### Convention about commits

A combination of Husky and Commitlint is used to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits) rules about commits descriptions.
