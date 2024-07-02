import CategoryButton from "@/components/category-button";
import React from "react";
import renderer from "react-test-renderer";

describe("CategoryButton Component", () => {
 it("renders with title", () => {
  const component = renderer.create(
   <CategoryButton title="Test Category" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
 });

 it("renders as selected", () => {
  const component = renderer.create(
   <CategoryButton title="Selected Category" isSelected />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
 });
});
