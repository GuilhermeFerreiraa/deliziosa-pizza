// src/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { gql } from 'graphql-tag';
import { MENU, PRODUCTS } from './utils/data/products';

// Definir o schema GraphQL
const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    description: String!
    price: Float!
    cover: String!
    thumbnail: String!
    ingredients: [String!]!
  }

  type Category {
    title: String!
    products: [Product!]!
  }

  type Query {
    products: [Product]
    categories: [Category]
  }
`;

// Criar o schema executável
const schema = makeExecutableSchema({ typeDefs });

// Adicionar mocks ao schema
const mocks = {
  Query: () => ({
    products: () => PRODUCTS,
    categories: () => MENU.map((item) => ({
      title: item.title,
      products: item.data,
    })),
  }),
  Product: () => ({
    cover: () => 'https://via.placeholder.com/150',
    thumbnail: () => 'https://via.placeholder.com/150',
  }),
};

// Aplicar os mocks ao schema
const schemaWithMocks = addMocksToSchema({ schema, mocks });

const client = new ApolloClient({
  link: new SchemaLink({ schema: schemaWithMocks }),
  cache: new InMemoryCache(),
});

export default client;
