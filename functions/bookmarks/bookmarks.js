const { ApolloServer, gql } = require('apollo-server-lambda')
var faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();

const typeDefs = gql`
  type Query {
    bookmarks: [Bookmark!]
  }
  type Mutation {
    addBM(title: String!, url: String!): Bookmark
    delBM(id: String!): Bookmark
  }
  type Bookmark{
    id: ID!
    title: String!
    url: String!
  }
`

const resolvers = {
  Query: {
    bookmarks: async (root, args, context) => {

      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index('bookmarks'))),
            q.Lambda(x => q.Get(x))
          )
        )

        console.log(result.data)

        return result.data.map(d => {
          return {
            id: d.ref.id,
            title: d.data.title,
            url: d.data.url
          }
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  Mutation: {
    addBM: async (_, { title, url }) => {

      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Create(
            q.Collection('bookmarks'),
            {
              data: {
                title,
                url
              }
            },
          )
        )

        return {
          ...result.ref.data,
          id: results.ref.id
        };
      }
      catch (err) {
        console.log(err)
      }
    },
    delBM: async (_, { id }) => {

      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Delete(
            q.Ref(q.Collection("bookmarks"), id)
          )
        )
        return result.ref.data;
      }
      catch (err) {
        console.log(err)
      }

    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()




