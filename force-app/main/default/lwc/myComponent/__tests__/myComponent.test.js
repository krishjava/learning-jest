import { createElement } from "lwc";
import MyComponent from "c/myComponent";

describe("MyComponent test suite...", () => {
  // eslint-disable-next-line jest/expect-expect
  test("testing first div", () => {
    const component = createElement("c-my-component", {
      is: MyComponent
    });
    document.body.appendChild(component);
    const firstDiv = component.shadowRoot.querySelector("div.first");
    const secondDiv = component.shadowRoot.querySelector("div.second");
    // const divs = component.shadowRoot.querySelectorAll('div');
    // console.log('divs ', divs[0].textContent);
    expect(firstDiv.textContent).toBe("Hello, World!");
    expect(secondDiv.textContent).not.toBe("my, World!");
  });
});
