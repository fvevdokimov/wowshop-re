module.exports = {
  siteMetadata: {
    title: `WowShopNsk`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `wave909.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-preact`,
      {
          resolve: `gatsby-plugin-modal-routing`,
          options: {
              appElement: '#___gatsby',
              modalProps: {
                  className: 'item-modal__content',
                  overlayClassName: 'item-modal__overlay'
              },
          }
      },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: 'gatsby-source-strapi-multiple-images',
        options: {
            apiURL: 'https://wowshop-api.wave909.com',
            contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
                'item',
                'banner',
                'type'
            ],
            queryLimit: 1000,
        }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
