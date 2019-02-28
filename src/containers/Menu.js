// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

import Row from "../design/Row"
import IconButton from "../design/IconButton"

import menu from "../assets/icons/baseline-menu.svg"
import ReactSVG from "react-svg"

import { theme } from "../design/theme"

const styles = {
  container: {
    padding: "8px"
  },
  icon: {
    fill: theme.colors.grey
  }
}

type Props = {|
  classes: { [string]: string }
|}

const Menu = ({ classes }: Props) => (
  <Row customStyles={classes.container}>
    <IconButton>
      <ReactSVG src={menu} className={classes.icon} />
    </IconButton>
  </Row>
)

export default injectSheet(styles)(Menu)
