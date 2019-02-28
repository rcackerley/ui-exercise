// @flow strict @format

import React from "react"

import injectSheet from "react-jss"
import classNames from "classnames"

import Row from "../design/Row"
import Text from "../design/Text"
import { theme } from "../design/theme"

import ReactSVG from "react-svg"

const styles = {
  icon: {
    height: "20px",
    fill: theme.colors.grey,
    marginRight: "10px"
  },
  row: {
    padding: "5px 15px 5px 15px",
    "&:hover": {
      backgroundColor: theme.colors.muted,
      borderRadius: "0 20px 20px 0"
    },
    cursor: "pointer"
  },
  active: {
    backgroundColor: theme.colors.muted,
    borderRadius: "0 20px 20px 0"
  }
}

type Props = {|
  item: { title: string, icon: string },
  classes: { [string]: string },
  filter: string,
  setFilter: string => void
|}

const MenuItem = ({ item, classes, filter, setFilter }: Props) => {
  return (
    <Row
      onClick={() => setFilter(item.title.toLowerCase())}
      centered={true}
      customStyles={classNames(
        classes.row,
        filter === item.title.toLowerCase() && classes.active
      )}
    >
      <ReactSVG svgClassName={classes.icon} src={item.icon} />
      <Text variant="p">{item.title}</Text>
    </Row>
  )
}

export default injectSheet(styles)(MenuItem)
