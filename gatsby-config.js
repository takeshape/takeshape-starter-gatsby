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
        url: `YOUR-ENDPOINT-HERE`,
        headers: {
          Authorization: `Bearer YOUR-API-KEY-HERE`,
        },
      },
    },
  ],
};
