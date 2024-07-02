import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";
import Header from "@/components/header";

describe("Header Component", () => {
  it("renders correctly with title and cart quantity", () => {
    const title = "Test Header";
    const cartQuantity = 3;

    const component = renderer.create(
      <Header title={title} cartQuantity={cartQuantity} />
    );

    const root = component.root;

    // Verificar se o título está presente
    const titleText = root.findByProps({ testID: "header-title" });
    expect(titleText.props.children).toBe(title);

    // Verificar se a quantidade do carrinho está presente
    if (cartQuantity > 0) {
      const cartQuantityText = root.findByProps({ testID: "cart-quantity" });
      expect(cartQuantityText.props.children).toBe(cartQuantity);
    }
  });

  it("renders correctly with title and zero cart quantity", () => {
    const title = "Test Header";
    const cartQuantity = 0;

    const component = renderer.create(
      <Header title={title} cartQuantity={cartQuantity} />
    );

    const root = component.root;

    // Verificar se o título está presente
    const titleText = root.findByProps({ testID: "header-title" });
    expect(titleText.props.children).toBe(title);

    // Verificar se não há quantidade de carrinho quando é zero
    const cartQuantityText = root.findAllByProps({ testID: "cart-quantity" });
    expect(cartQuantityText.length).toBe(0);
  });
});
