module.exports = {
  siteMetadata: {
    title: `virtual-lolly`,
    description: `Gatsby-TypeScript Graphql FaunaDB`,
    author: `zule huma`,
  },
  plugins: ["gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "lollies",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "lollies",
        // Url to query from
        url: "https://virtal-lolly-zh.netlify.app/.netlify/functions/virtual",


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