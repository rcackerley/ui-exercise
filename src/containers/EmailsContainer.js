// @flow strict @format

import React from "react"

import Column from "../design/Column"

import Actions from "../components/Actions"
import Tabs from "../components/Tabs"
import Emails from "../components/Emails"

import type { Email } from "../data/email"

type Props = {|
  emails: ?(Email[]),
  toggleEmailTags: (string, string) => void
|}

const EmailsContainer = ({ emails, toggleEmailTags }: Props) => (
  <Column>
    <Actions />
    <Tabs />
    <Emails toggleEmailTags={toggleEmailTags} emails={emails} />
  </Column>
)

export default EmailsContainer
