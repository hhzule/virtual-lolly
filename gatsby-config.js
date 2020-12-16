module.exports = {
  siteMetadata: {
    title: `Bookmarking App`,
    description: `Gatsby-TypeScript Graphql FaunaDB`,
    author: `zule huma`,
  },
  plugins: ["gatsby-plugin-typescript", {
    resolve: `gatsby-plugin-sass`,
    options: {
      // Override the file regex for SASS
      sassRuleTest: /\.global\.s(a|c)ss$/,
      // Override the file regex for CSS modules
      sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
    },
  }, {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "lollies",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "lollies",
        // Url to query from
        url: "/.netlify/functions/virtual",


      },
    },
  ],
}

// {
//   # This is the fieldName you've defined in the config
//   swapi {
//     allSpecies {
//       name
//     }
//   }
//   github {
//     viewer {
//       email
//     }
//   }
// }