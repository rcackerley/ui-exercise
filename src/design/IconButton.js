// @flow strict @format

import React from "react"
import type { Node } from "react"

import injectSheet from "react-jss"
import { theme } from "../design/theme"

const styles = {
  button: {
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "12px",
    "&:hover": {
      backgroundColor: theme.colors.background,
      borderRadius: "50%"
    },
    "&:focus": {
      outline: "none"
    }
  }
}

type Props = {|
  classes: { [string]: string },
  children: Node
|}

const IconButton = ({ classes, children }: Props) => (
  <button className={classes.button}>{children}</button>
)

export default injectSheet(styles)(IconButton)
