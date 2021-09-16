module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `TakeShape`,
        fieldName: `takeshape`,
        url: process.env.GATSBY_TAKESHAPE_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_TAKESHAPE_API_KEY}`,
        },
      },
    },
  ],
};
