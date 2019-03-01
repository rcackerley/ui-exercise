import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Text from "./design/Text"

import emails from "./data/emails.json"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe("emails", () => {
  test("formatted correctly", () => {
    for (let message of emails.messages) {
      expect(message).toHaveProperty("body")
      expect(message).toHaveProperty("id")
      expect(message).toHaveProperty("subject")
      expect(message).toHaveProperty("tags")
      expect(message).toHaveProperty("date")
    }
  })
})
