/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,`gatsby-plugin-react-helmet`],
  siteMetadata:{
    title:"Home",
    titleTemplate: "%s - Christofer Berruz's Personal Website",
    description: "A place where Christofer Berruz showcases his portfolio and his ideas in a blog.",
    url:"https://www.cberruz.com",
    image:"/images/websiteLogo.jpg",
    twitterUsername:"@atberruz",
  },
}
