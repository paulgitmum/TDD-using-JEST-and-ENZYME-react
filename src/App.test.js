import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import {shallow } from "enzyme";


describe("counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter/>);
  });

  test("Render the title of counter", () => {
    expect(wrapper.find("h2").text()).toContain("My Counter App");
  });
  test("Rendering a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
  test("Render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("Render the click event of increment button and increment value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("Render a button of with text of `decrement`", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
  });

  test("Render a click event of decrement button and decrement value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("-1");
  });

  
});
