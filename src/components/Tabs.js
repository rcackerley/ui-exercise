// @flow strict @format

import React from "react"

import injectSheet from "react-jss"
import ReactSVG from "react-svg"

import classNames from "classnames"

import Row from "../design/Row"
import Text from "../design/Text"
import { theme } from "../design/theme"

import inbox from "../assets/icons/inbox.svg"
import people from "../assets/icons/people.svg"
import offer from "../assets/icons/local-offer.svg"

const styles = {
  icon: {
    fill: theme.colors.grey,
    margin: "5px 10px 0 15px"
  },
  tab: {
    margin: "0 15px 15px 0",
    width: "200px",
    height: "100%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.colors.background
    }
  },
  tabs: {
    padding: "0 15px 0 15px",
    borderBottom: `1px solid ${theme.colors.background}`
  },
  selectedTab: {
    borderBottom: `2px solid ${theme.colors.primary}`
  },
  selectedText: {
    color: theme.colors.primary
  },
  selectedIcon: {
    fill: theme.colors.primary
  }
}

const tabs = [
  {
    type: "Primary",
    icon: inbox
  },
  {
    type: "Social",
    icon: people
  },
  {
    type: "Promotions",
    icon: offer
  }
]

type Props = {
  classes: { [string]: string }
}

const Tabs = ({ classes }: Props) => (
  <Row customStyles={classes.tabs}>
    {tabs.map(tab => (
      <Row
        centered={true}
        customStyles={classNames(
          classes.tab,
          tab.type === "Primary" && classes.selectedTab
        )}
        key={tab.type}
      >
        <ReactSVG
          svgClassName={classNames(
            classes.icon,
            tab.type === "Primary" && classes.selectedIcon
          )}
          src={tab.icon}
        />
        <Text
          customStyles={tab.type === "Primary" && classes.selectedText}
          variant="secondary"
        >
          {tab.type}
        </Text>
      </Row>
    ))}
  </Row>
)

export default injectSheet(styles)(Tabs)
