#  GraphQL_NodeJS_Express

## Description

This project is a simple implementation of a GraphQL server using Node.js and Express, leveraging the `graphql` and `express-graphql` packages. It features a GraphQL schema defining user data with queries to retrieve users by ID, phone number, and all users. The resolvers handle data retrieval from a static JSON dataset.

## Key Features

- GraphQL server using `graphql` and `express-graphql`.
- Queries for retrieving users by ID, phone number, and all users.
- Static JSON dataset for user data.

## How to Run

1. Clone the repository: `git clone https://github.com/your-username/GraphQL_NodeJS_Express.git`
2. Install dependencies: `npm install`
3. Run the server: `node server.js`
4. Access the GraphQL endpoint at [http://localhost:4000/graphql](http://localhost:4000/graphql).

## Example Request and Response

### Example Query

Assuming you have the server running locally, you can use Graphqli to send a GraphQL query. Here's an example query:

```graphql
query ($phoneNumber : String ){  
  getUserByPhone(phoneId: $phoneNumber ){
   ...UserDataFields
  }  
}

fragment UserDataFields on User {
    id
    name
    username
    email
    address {
      street
      suite
      city
      zipcode
      geo {
        lat
        lng
      }
    }
    phone
    website
    company {
      name
      catchPhrase
      bs
    }
  }
  

```
#### Query Variables
```json
{
"phoneNumber" : "010-692-6593 x09125"
}

```
### Example Response
```json
    "getUserByPhone": {
      "id": "2",
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  
```

Feel free to explore the queries in GraphiQL or test them using an HTTP client. This project serves as a lightweight introduction to building GraphQL APIs without the use of Apollo Server.
