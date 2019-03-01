// @flow strict @format

import React from "react"

import Column from "../design/Column"
import Row from "../design/Row"

import Menu from "../containers/Menu"
import LeftNavigation from "../containers/LeftNavigation"
import EmailsContainer from "../containers/EmailsContainer"

import emails from "../data/emails.json"
import type { Email } from "../data/email"
import type { User } from "../data/user"

import robby from "../assets/robby.jpg"

type Props = void
type State = {|
  emails: ?(Email[]),
  user: ?User,
  filter: string
|}

class Inbox extends React.Component<Props, State> {
  state = {
    emails: null,
    user: null,
    filter: "inbox"
  }
  componentDidMount() {
    let messages = emails.messages.map(message => ({
      ...message,
      checked: false,
      important: false,
      starred: false
    }))
    this.setState({
      emails: messages,
      user: {
        name: "Robby Ackerley",
        img: robby,
        id: "12345"
      }
    })
  }

  setFilter = (filterType: string) => {
    this.setState({
      filter: filterType
    })
  }

  toggleEmailTags = (emailId: string, type: string) => {
    this.state.emails &&
      this.setState({
        emails: this.state.emails.map(email => {
          if (email.id === emailId) {
            email[type] = !email[type]
          }
          return email
        })
      })
  }

  render() {
    const { user, emails, filter } = this.state
    return (
      <Column>
        <Menu user={user} />
        <Row>
          <LeftNavigation
            setFilter={this.setFilter}
            filter={filter}
            emails={emails}
          />
          <EmailsContainer
            toggleEmailTags={this.toggleEmailTags}
            emails={emails}
          />
        </Row>
      </Column>
    )
  }
}

export default Inbox
