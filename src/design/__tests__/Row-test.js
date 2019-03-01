import React from "react"
import ReactDOM from "react-dom"
import Row from "../Row"

import renderer from "react-test-renderer"

it("render Row component correctly", () => {
  const RowComponent = renderer.create(<Row />).toJSON()
  expect(RowComponent).toMatchSnapshot()
})
