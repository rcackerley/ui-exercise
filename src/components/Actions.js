// @flow strict @format

import React from "react"

import Row from "../design/Row"
import IconButton from "../design/IconButton"
import { theme } from "../design/theme"

import ReactSVG from "react-svg"
import injectSheet from "react-jss"

import type { Email } from "../data/email"

import trash from "../assets/icons/baseline-delete.svg"

const styles = {
  row: {
    borderBottom: `1px solid ${theme.colors.background}`,
    paddingLeft: "15px"
  },
  icon: {
    fill: theme.colors.grey
  }
}

type Props = {|
  classes: { [string]: string },
  emails: ?(Email[]),
  moveMultipleEmailsToTrash: (string[]) => void
|}

const Actions = ({ classes, emails, moveMultipleEmailsToTrash }: Props) => (
  <Row customStyles={classes.row}>
    {emails && emails.find(email => email.checked) && (
      <IconButton
        onClick={() => {
          let emailIds = []
          for (let email of emails) {
            if (email.checked) {
              emailIds.push(email.id)
            }
          }
          moveMultipleEmailsToTrash(emailIds)
        }}
      >
        <ReactSVG svgClassName={classes.icon} src={trash} />
      </IconButton>
    )}
  </Row>
)

export default injectSheet(styles)(Actions)
