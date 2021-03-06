// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

import type { Email } from "../data/Email"

import Column from "../design/Column"
import Button from "../design/Button"

import create from "../assets/create.png"
import inbox from "../assets/icons/inbox.svg"
import star from "../assets/icons/star.svg"
import snooze from "../assets/icons/snooze.svg"
import important from "../assets/icons/important.svg"
import send from "../assets/icons/send.svg"
import drafts from "../assets/icons/drafts.svg"
import label from "../assets/icons/label.svg"

import MenuItem from "../components/MenuItem"

let menuItems = [
  { title: "Inbox", icon: inbox },
  { title: "Starred", icon: star },
  { title: "Snoozed", icon: snooze },
  { title: "Important", icon: important },
  { title: "Sent", icon: send },
  { title: "Drafts", icon: drafts },
  { title: "Trash", icon: label }
]

const styles = {
  column: {
    "@media (max-width: 600px)": {
      width: "50px"
    }
  },
  button: {
    "@media (max-width: 600px)": {
      visibility: "hidden"
    }
  }
}

type Props = {|
  classes: { [string]: string },
  emails: ?[Email],
  filter: string,
  setFilter: string => void
|}

const getTags = emails => {
  if (emails) {
    let allTags = []
    emails.map(email => allTags.push(email.tags))

    // Flatten An array - reduce instead of using .flat for flow
    let tags = [
      ...new Set(
        allTags.reduce(
          (acc, cur) => [...acc, ...(Array.isArray(cur) ? cur : [cur])],
          []
        )
      )
    ]
    return tags.map(tag => {
      let title = tag.charAt(0).toUpperCase() + tag.slice(1)
      return { title: title, icon: label }
    })
  } else {
    return []
  }
}

const LeftNavigation = ({ classes, emails, filter, setFilter }: Props) => {
  return (
    <Column customStyles={classes.column}>
      <Button customStyles={classes.button} icon={create}>
        Compose
      </Button>
      {menuItems.concat(getTags(emails)).map(item => (
        <MenuItem
          setFilter={setFilter}
          filter={filter}
          key={item.title}
          item={item}
        />
      ))}
    </Column>
  )
}

export default injectSheet(styles)(LeftNavigation)
