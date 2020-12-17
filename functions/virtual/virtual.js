const { ApolloServer, gql } = require('apollo-server-lambda')
const shorlid = require("shortid")
const axios = require("axios")
var faunadb = require('faunadb'),

  q = faunadb.query;
require('dotenv').config();

const typeDefs = gql`
  type Query {
   getLolly: [Lolly]
  getByUrl(url: String!): Lolly
  }
  type Lolly {
    first: String!
    second: String!
    third: String!
    from: String!
    message: String!
    giftedto: String!
    url: String!
  }
  type Mutation {
    addLolly( first: String!
      second: String!
      third: String!
      from: String!
      message: String!
      giftedto: String!): Lolly
  }
`

const resolvers = {
  Query: {
    getLolly: async () => {
      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index('lolly'))),
            q.Lambda(x => q.Get(x))
          )
        )

        return result.data.map(d => {

          return {

            first: d.data.first,
            second: d.data.second,
            third: d.data.third,
            from: d.data.from,
            message: d.data.message,
            giftedto: d.data.giftedto,
            url: d.data.url

          }
        })
      } catch (e) {
        console.log(e, "error")
      }
    },
    getByUrl: async (_, { url }) => {
      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Get(q.Match(q.Index("url"), url))
        );
        // console.log(result.data)
        // console.log("imrunnig")
        return result.data

      } catch (e) {
        return error.toString();
      }
    }

  },
  Mutation: {
    addLolly: async (_, { first, second, third, from, message, giftedto }, context) => {
      console.log(" ran from serverless")
      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Create(
            q.Collection('lolly'),
            {
              data: {
                first,
                second,
                third,
                from,
                message,
                giftedto,
                url: shorlid.generate()
              }
            },
          )
        )
        // const rebuild = await axios.post(process.env.NETLIFY_HOOK)
        // console.log(rebuild, "rebuild")
        // console.log(result.data)
        return result.data;
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
