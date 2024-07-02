/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Category = {
  __typename: "Category",
  title: string,
  data:  Array<Product >,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  price: number,
  description: string,
  cover: string,
  thumbnail: string,
  ingredients:  Array<Ingredient >,
};

export type Ingredient = {
  __typename: "Ingredient",
  name: string,
};

export type GetCategoriesQueryVariables = {
};

export type GetCategoriesQuery = {
  getCategories:  Array< {
    __typename: "Category",
    title: string,
    data:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      price: number,
      description: string,
      cover: string,
      thumbnail: string,
    } >,
  } >,
};

export type GetProductsQueryVariables = {
};

export type GetProductsQuery = {
  getProducts:  Array< {
    __typename: "Product",
    id: string,
    title: string,
    price: number,
    description: string,
    cover: string,
    thumbnail: string,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
    } >,
  } >,
};
