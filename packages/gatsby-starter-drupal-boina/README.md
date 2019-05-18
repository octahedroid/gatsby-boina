# Gatsby Starter Drupal Boina

The Gatsby Starter for the Drupal Boina Distribution

- [Gatsby demo site](https://boina.netlify.com/)

## Project dependencies

- [node](https://nodejs.org/en/download/)
- [gatsby-cli](https://www.gatsbyjs.org/tutorial/part-zero/#install-gatsby-cli)

## Install

```shell
gatsby new boina https://github.com/weknowinc/gatsby-starter-drupal-boina
cd boina
```

## Copy environment file

```shell
cp .env.dist .env.development
```

> You should use `.env.production` for production environment.

## Update environment variables

 ```shell
# drupal
DRUPAL_HOST=http://drupal-boina.weknowinc.com/
```

> The DRUPAL_HOST variable contains the URL for your Drupal backed server. We highly recommend you to use the [Drupal Boina Distribution](https://github.com/weknowinc/drupal-boina). But in case you want to try right away. Don't worry we prepare a demo server running our Boina Distribution at http://drupal-boina.weknowinc.com/ 


## Start Gatsby in development mode

```shell
gatsby develop
```

## Replacing a component (shadowing)

Create a js component in the starting with the path:

```shell
/src/components/@weknow/gatsby-theme-drupal-boina/
```

And follow the path to the component you want to replace.
