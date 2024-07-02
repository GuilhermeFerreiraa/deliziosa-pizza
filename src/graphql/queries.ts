/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCategories = /* GraphQL */ `query GetCategories {
  getCategories {
    title
    data {
      id
      title
      price
      description
      cover
      thumbnail
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoriesQueryVariables,
  APITypes.GetCategoriesQuery
>;
export const getProducts = /* GraphQL */ `query GetProducts {
  getProducts {
    id
    title
    price
    description
    cover
    thumbnail
    ingredients {
      name
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductsQueryVariables,
  APITypes.GetProductsQuery
>;
