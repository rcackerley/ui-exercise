import React from "react"
import ReactDOM from "react-dom"
import Text from "../Text"

import renderer from "react-test-renderer"

it("render text component correctly", () => {
  const TextComponent = renderer.create(<Text />).toJSON()
  expect(TextComponent).toMatchSnapshot()
})
