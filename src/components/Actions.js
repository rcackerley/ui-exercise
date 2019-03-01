// @flow strict @format

import React from "react"

import Row from "../design/Row"
import IconButton from "../design/IconButton"
import { theme } from "../design/theme"

import ReactSVG from "react-svg"

import injectSheet from "react-jss"

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
  classes: { [string]: string }
|}

const Actions = ({ classes }: Props) => (
  <Row customStyles={classes.row}>
    <IconButton>
      <ReactSVG svgClassName={classes.icon} src={trash} />
    </IconButton>
  </Row>
)

export default injectSheet(styles)(Actions)
