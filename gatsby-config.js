module.exports = {
  siteMetadata: {
    title: `Hector Jesus Portfolio`,
    description: `A personal portfolio built with Gatsby.`,
    author: `Hector Jesus`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `your_space_id`, /** Wasnt sure if was to add the one I have */
        accessToken: `your_access_token`,/** Wasnt sure if was to add the one I have */
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
