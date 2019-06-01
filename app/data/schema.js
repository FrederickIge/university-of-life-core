'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// Define our schema using the GraphQL schema language
const typeDefs = `

type User {
    id: Int!
    username: String!
    email: String!
  }

  type School {
    opeid: Int!
    name: String!
    unit_id: Int!
    sector_name: String!
    net_price: String!
  }

  type Major {
    id: Int!
    name: String!
    starting_medium_salary: Int!
    mid_careeer_medium_salary: Int!
  }

  type Plan {
    id: Int!
    school: School!
    major : Major
    projected_salary: Int!
    projected_cost: Int!
    user_id: String!
  }

  type Query {
    allSchools: [School]
    searchSchools (name:String!): [School!]!
    searchMajors (name:String!): [Major!]!
    getPlansByUser(user_id:String!) : [Plan!]!
    getPlanById(id:Int!) : Plan!
  }

  type Mutation {
    savePlan(school_id: Int!, major_id: Int!, projected_salary: Int!, projected_cost: Int!, user_id: String!): Plan
    deletePlan(plan_id: Int!): Boolean!
  }


`

module.exports = makeExecutableSchema({ typeDefs, resolvers })