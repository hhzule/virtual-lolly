const { ApolloServer, gql } = require('apollo-server-lambda')
var faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();

const typeDefs = gql`
  type Query {
    todos: [Todo!]
  }
  type Mutation {
    addTodo(task: String!): Todo
    delTodo(id: String!): Todo
    updateTodo(id: String!): Todo
 
  }
  type Todo {
    id: ID!
    task: String!
    status: Boolean!
  }
`

const resolvers = {
  Query: {
    todos: async (root, args, context) => {

      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index('task'))),
            q.Lambda(x => q.Get(x))
          )
        )

        console.log(result.data)

        return result.data.map(d => {
          return {
            id: d.ref.id,
            status: d.data.status,
            task: d.data.task
          }
        })
      }
      catch (err) {
        console.log(err)
      }
    }
  },
  Mutation: {
    addTodo: async (_, { task }) => {

      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Create(
            q.Collection('todos'),
            {
              data: {
                task: task,
                status: false
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
    delTodo: async (_, { id }) => {

      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Delete(
            q.Ref(q.Collection("todos"), id)
          )
        )
        return result.ref.data;
      }
      catch (err) {
        console.log(err)
      }

    },
    updateTodo: async (_, { id }) => {

      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNADB });
        const result = await adminClient.query(
          q.Update(q.Ref(q.Collection("todos"), id), {
            data: {
              status: true
            }
          })
        )
        return result.ref.data;
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

exports.handler = server.createHandler()




