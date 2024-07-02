import { Button } from "@/components/button";
import React from "react";
import renderer from "react-test-renderer";

describe("Button Component", () => {
  it("renders children correctly", () => {
    const component = renderer.create(
      <Button>
        <Button.Text>Click Me</Button.Text>
      </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
