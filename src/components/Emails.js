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
import trash from "../assets/icons/baseline-delete.svg"
import snooze from "../assets/icons/snooze.svg"

import ReactSVG from "react-svg"

import type { Email } from "../data/email"

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

  return monthAbbrs[monthIndex] + " " + day
}

const styles = {
  row: {
    borderBottom: `1px solid ${theme.colors.background}`,
    // flex: 1,
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
  body: {
    flex: 1,
    minWidth: 0
  },
  dateSection: {
    justifyContent: "flex-end",
    margin: "0 20px 0 40px",
    minWidth: "50px",
    "@media (max-width:425px)": {
      display: "none"
    }
  },
  actions: {
    height: "22px",
    width: "22px",
    fill: theme.colors.grey
  },
  nonShrinkCell: {
    whiteSpace: "nowrap"
  },
  tag: {
    backgroundColor: theme.colors.muted,
    padding: "6px",
    borderRadius: "10px",
    margin: "0 10px 0 0",
    "@media (max-width: 600px)": {
      display: "none"
    }
  },
  text: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}

type Props = {|
  classes: { [string]: string },
  emails: ?(Email[]),
  toggleEmailTags: (string, string) => void,
  moveEmailToTrash: string => void,
  snoozeEmail: string => void,
  filter: string,
  trash: Email[]
|}

type State = {|
  hover: ?string
|}

class Emails extends React.Component<Props, State> {
  state = {
    hover: null
  }

  filterEmails = (type: string) => {
    const { trash, emails } = this.props
    // Ternaries are included to satisfy flow
    if (type === "trash") {
      return trash
    } else if (type === "starred" || type === "important") {
      return emails ? emails.filter(email => email[type]) : []
    } else if (type === "inbox") {
      return emails ? emails : []
    } else if (type === "sent" || type === "drafts") {
      return []
    } else {
      return emails ? emails.filter(email => email.tags.includes(type)) : []
    }
  }

  render() {
    const {
      classes,
      emails,
      toggleEmailTags,
      moveEmailToTrash,
      snoozeEmail,
      filter
    } = this.props
    if (emails) {
      return (
        <>
          {this.filterEmails(filter).map(email => (
            <Row
              onMouseEnter={() => this.setState({ hover: email.id })}
              onMouseLeave={() => this.setState({ hover: null })}
              key={email.id}
              customStyles={classNames(
                classes.row,
                email.checked && classes.selectedRow
              )}
            >
              <Row customStyles={classes.nonShrinkCell}>
                <IconButton
                  onClick={() => toggleEmailTags(email.id, "checked")}
                >
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
              <Row customStyles={classes.body} centered={true}>
                <Text customStyles={classes.sender} variant="p">
                  {email.sender}
                </Text>
                <Text inTable customStyles={classes.text} variant="secondary">
                  <Text variant="p">{email.subject}</Text>
                  {` - ${email.body}`}
                </Text>
              </Row>
              {this.state.hover === email.id ? (
                <Row
                  customStyles={classNames(
                    classes.dateSection,
                    classes.nonShrinkCell
                  )}
                >
                  <IconButton
                    onClick={() => moveEmailToTrash(email.id)}
                    variant="small"
                  >
                    <ReactSVG svgClassName={classes.actions} src={trash} />
                  </IconButton>
                  <IconButton
                    onClick={() => snoozeEmail(email.id)}
                    variant="small"
                  >
                    <ReactSVG svgClassName={classes.actions} src={snooze} />
                  </IconButton>
                </Row>
              ) : (
                <Row
                  customStyles={classNames(
                    classes.dateSection,
                    classes.nonShrinkCell
                  )}
                  centered={true}
                >
                  {email.tags.map(tag => (
                    <Text customStyles={classes.tag} variant="small" key={tag}>
                      {tag}
                    </Text>
                  ))}
                  <Text variant="small">
                    {formatDate(new Date(email.date))}
                  </Text>
                </Row>
              )}
            </Row>
          ))}
        </>
      )
    } else {
      return null
    }
  }
}

export default injectSheet(styles)(Emails)
