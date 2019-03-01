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
  snoozeEmail: string => void,
  filter: string,
  trash: Email[]
|}

const EmailsContainer = ({
  emails,
  toggleEmailTags,
  moveEmailToTrash,
  snoozeEmail,
  filter,
  trash
}: Props) => (
  <Column>
    <Actions />
    <Tabs />
    <Emails
      moveEmailToTrash={moveEmailToTrash}
      toggleEmailTags={toggleEmailTags}
      snoozeEmail={snoozeEmail}
      emails={emails}
      filter={filter}
      trash={trash}
    />
  </Column>
)

export default EmailsContainer
