const { buildSchema } = require("graphql");

const schema = buildSchema(`

type Call {
  id: ID
  phone: String
  call_date: String
  status: String
}

input CallInput {
  id: ID
  phone: String
  call_date: String
  status: String
}

input changeCall {
  id: ID
  phone: String
  call_date: String
  status: String
}

type Query {
  getAllCalls: [Call]
  getCall(phone: String): Call
  changeCall(id:ID, status:String): Call
}

type Mutation {
  addCall(input: CallInput): Call
  changeCall(input: changeCall): Call
}

`);

module.exports = schema;

