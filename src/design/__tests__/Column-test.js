import React from "react"
import ReactDOM from "react-dom"
import Column from "../Column"

import renderer from "react-test-renderer"

it("render Column component correctly", () => {
  const ColumnComponent = renderer.create(<Column />).toJSON()
  expect(ColumnComponent).toMatchSnapshot()
})
