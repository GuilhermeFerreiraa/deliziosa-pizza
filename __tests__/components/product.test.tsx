import Product from "@/components/product";
import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";

describe("Product Component", () => {
 const productData = {
  title: "Test Product",
  description: "Test Description",
  thumbnail: { source: require("@/assets/products/thumbnail/1.png") },
  quantity: 2,
  price: 49.99,
 };

 let component: ReactTestRenderer;

 beforeEach(() => {
  component = renderer.create(<Product data={productData} />);
 });

 it("renders product title, description, price, and quantity", () => {
  const root = component.root;

  const titleText = root.findByProps({ testID: "product-title" });
  expect(titleText.props.children).toBe(productData.title);

  const descriptionText = root.findByProps({ testID: "product-description" });
  expect(descriptionText.props.children).toBe(productData.description);

  const formattedPrice = productData.price.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  })

  const priceText = root.findByProps({ testID: "product-price" });

  const receivedPrice = priceText.props.children;

  expect(receivedPrice).toBe(formattedPrice);

  const quantityText = root.findByProps({ testID: "product-quantity" });

  const quantity_x = quantityText.props.children[0];

  const quantity_value = parseInt(quantityText.props.children[1]);

  expect(quantity_x + quantity_value).toBe(`x${productData.quantity}`);
 });
});
