// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

import classNames from "classnames"

import { theme } from "../design/theme"
import Row from "../design/Row"
import IconButton from "../design/IconButton"
import Checkbox from "../design/Checkbox"
import Text from "../design/Text"

import star from "../assets/icons/star.svg"
import important from "../assets/icons/important.svg"

import ReactSVG from "react-svg"

import type { Email } from "../data/email"

const styles = {
  row: {
    borderBottom: `1px solid ${theme.colors.background}`,
    flex: 1,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 20px rgba(0,0,0, .25)"
    }
  },
  selectedRow: {
    backgroundColor: theme.colors.secondaryMuted
  },
  icon: {
    height: "22px",
    width: "22px",
    fill: theme.colors.muted
  },
  active: {
    fill: theme.colors.gold
  },
  sender: {
    marginRight: "20px"
  },
  dateSection: {
    justifyContent: "flex-end",
    flex: 1,
    margin: "0 20px 0 20px",
    minWidth: "50px"
  }
}

type Props = {|
  classes: { [string]: string },
  emails: ?(Email[]),
  toggleEmailTags: (string, string) => void
|}

const formatDate = date => {
  var monthAbbrs = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  var day = date.getDate()
  var monthIndex = date.getMonth()
  var year = date.getFullYear()

  return monthAbbrs[monthIndex] + " " + day
}

const Emails = ({ classes, emails, toggleEmailTags }: Props) => {
  if (emails) {
    return emails.map(email => (
      <Row
        key={email.id}
        customStyles={classNames(
          classes.row,
          email.checked && classes.selectedRow
        )}
      >
        <Row>
          <IconButton onClick={() => toggleEmailTags(email.id, "checked")}>
            <Checkbox />
          </IconButton>
          <IconButton
            variant="small"
            onClick={() => toggleEmailTags(email.id, "starred")}
          >
            <ReactSVG
              svgClassName={classNames(
                classes.icon,
                email.starred && classes.active
              )}
              src={star}
            />
          </IconButton>
          <IconButton
            variant="small"
            onClick={() => toggleEmailTags(email.id, "important")}
          >
            <ReactSVG
              svgClassName={classNames(
                classes.icon,
                email.important && classes.active
              )}
              src={important}
            />
          </IconButton>
        </Row>
        <Row centered={true}>
          <Text customStyles={classes.sender} variant="p">
            {email.sender}
          </Text>
          <Text variant="p">{email.subject}</Text>
          <Text variant="secondary">{` - ${email.body.substring(0, 47) +
            "..."}`}</Text>
        </Row>
        <Row customStyles={classes.dateSection} centered={true}>
          <Text variant="small">{formatDate(new Date(email.date))}</Text>
        </Row>
      </Row>
    ))
  } else {
    return null
  }
}

export default injectSheet(styles)(Emails)
