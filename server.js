
const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const userData = require('./UserData.json');

// Define  GraphQL schema
const schema = buildSchema(`
  type Geo {
    lat: String!
    lng: String!
  }

  type Address {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo!
  }

  type Company {
    name: String!
    catchPhrase: String!
    bs: String!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address!
    phone: String
    website: String!
    company: Company!
  }

  type Query {
    getUserById(userId: ID!): User
    getAllUsers: [User]
    getUserByPhone(phoneId: String): User
  }
`);


// Define resolvers to handle GraphQL queries
const root = {
  getUserById: ({ userId }) => userData.find(user => user.id === userId),
  getAllUsers: () => userData,
  getUserByPhone : ({ phoneId }) => userData.find(user => user.phone === phoneId),
};

// Set up the GraphQL endpoint with express-graphql
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable the GraphiQL interface for testing in the browser
}));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
});
