// @flow strict @format

import React from "react"

import Column from "../design/Column"

import Actions from "../components/Actions"
import Tabs from "../components/Tabs"
import Emails from "../components/Emails"

import type { Email } from "../data/email"

type Props = {|
  emails: ?(Email[]),
  toggleEmailTags: (string, string) => void,
  moveEmailToTrash: string => void,
  moveMultipleEmailsToTrash: (string[]) => void,
  snoozeEmail: string => void,
  filter: string,
  trash: Email[],
  refreshEmail: () => void
|}

const EmailsContainer = (props: Props) => (
  <Column>
    <Actions
      refreshEmail={props.refreshEmail}
      moveMultipleEmailsToTrash={props.moveMultipleEmailsToTrash}
      emails={props.emails}
    />
    <Tabs />
    <Emails {...props} />
  </Column>
)

export default EmailsContainer
