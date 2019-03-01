import React from "react"
import ReactDOM from "react-dom"
import Emails from "../Emails"

import renderer from "react-test-renderer"

it("render Emails component correctly", () => {
  const EmailsComponent = renderer.create(<Emails />).toJSON()
  expect(EmailsComponent).toMatchSnapshot()
})
