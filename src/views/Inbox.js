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

type Props = {}
type State = {|
  emails: ?(Email[]),
  user: ?User,
  filter: string,
  trash: Email[],
  snoozedEmails: string[]
|}

class Inbox extends React.Component<Props, State> {
  state = {
    emails: null,
    user: null,
    filter: "inbox",
    trash: [],
    snoozedEmails: []
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

  moveEmailToTrash = (emailId: string) => {
    // verbosity on null checks needed to satisfy flow
    if (this.state.emails != null) {
      let deletedEmail = this.state.emails.find(email => email.id === emailId)
      deletedEmail &&
        this.setState({
          trash: this.state.trash.concat([deletedEmail]),
          emails:
            this.state.emails &&
            this.state.emails.filter(email => email.id !== emailId)
        })
    }
  }

  moveMultipleEmailsToTrash = (emailIds: string[]) => {
    if (emailIds.length === 0) {
      return
    }
    if (this.state.emails != null) {
      let emails = []
      this.setState({
        emails: this.state.emails.filter(email => {
          if (emailIds.includes(email.id)) {
            email.checked = false
            emails.push(email)
            return false
          } else {
            return true
          }
        }),
        trash: this.state.trash.concat(emails)
      })
    }
  }

  snoozeEmail = (emailId: string) => {
    this.setState({
      snoozedEmails: this.state.snoozedEmails.concat(emailId)
    })
  }

  refreshEmail = () => {
    //simulate adding a new email
    if (this.state.emails)
      this.setState({
        emails: this.state.emails.concat([
          {
            id: `${this.state.emails.length + 1}`,
            subject: "Hello",
            sender: "bob.smith@gmail.com",
            body:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",
            tags: ["work"],
            date: "2017-03-05T03:25:43.511Z",
            checked: false,
            important: false,
            starred: false
          }
        ])
      })
  }

  render() {
    const { user, emails, filter, trash, snoozedEmails } = this.state
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
            refreshEmail={this.refreshEmail}
            toggleEmailTags={this.toggleEmailTags}
            moveEmailToTrash={this.moveEmailToTrash}
            snoozeEmail={this.snoozeEmail}
            snoozedEmails={snoozedEmails}
            emails={emails}
            filter={filter}
            trash={trash}
            moveMultipleEmailsToTrash={this.moveMultipleEmailsToTrash}
          />
        </Row>
      </Column>
    )
  }
}

export default Inbox
