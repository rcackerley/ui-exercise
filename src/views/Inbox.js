// @flow strict @format

import React from "react"

import Column from "../design/Column"
import Row from "../design/Row"

import Menu from "../containers/Menu"
import LeftNavigation from "../containers/LeftNavigation"
import EmailsContainer from "../containers/EmailsContainer"

type Props = void
type State = {|
  emails: ?[]
|}

class Inbox extends React.Component<Props, State> {
  state = {
    emails: null
  }
  async componentDidMount() {
    // const response = await fetch("../data/emails.json")
    // console.log(response)
  }

  render() {
    return (
      <Column>
        <Menu />
        <Row>
          <LeftNavigation />
          <EmailsContainer />
        </Row>
      </Column>
    )
  }
}

export default Inbox
