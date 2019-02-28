// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

import Row from "../design/Row"
import IconButton from "../design/IconButton"
import Image from "../design/Image"

import menu from "../assets/icons/baseline-menu.svg"
import logo from "../assets/gmail.png"

import ReactSVG from "react-svg"

import { theme } from "../design/theme"

const styles = {
  container: {
    padding: "8px",
    borderBottom: `1px solid ${theme.colors.background}`
  },
  icon: {
    fill: theme.colors.grey
  },
  logo: {
    height: "40px",
    margin: "0 10px 0 10px"
  }
}

type Props = {|
  classes: { [string]: string }
|}

const Menu = ({ classes }: Props) => (
  <Row centered={true} customStyles={classes.container}>
    <IconButton>
      <ReactSVG src={menu} className={classes.icon} />
    </IconButton>
    <Image customStyles={classes.logo} src={logo} />
  </Row>
)

export default injectSheet(styles)(Menu)
