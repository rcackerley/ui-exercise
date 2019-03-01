// @flow strict @format

import React from "react"
import type { Node } from "react"

import classNames from "classnames"

import injectSheet from "react-jss"
import { theme } from "../design/theme"

const styles = {
  button: {
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: "12px",
    "&:hover": {
      backgroundColor: theme.colors.muted,
      borderRadius: "50%"
    },
    "&:focus": {
      outline: "none"
    }
  },
  small: {
    padding: 6,
    width: "35px",
    height: "35px",
    marginTop: "6px"
  }
}

type Props = {|
  classes: { [string]: string },
  children: Node,
  onClick: () => void,
  variant: string,
  customStyles: string
|}

const IconButton = ({
  classes,
  children,
  onClick,
  variant,
  customStyles
}: Props) => (
  <button
    onClick={onClick}
    className={classNames(classes.button, classes[variant], customStyles)}
  >
    {children}
  </button>
)

export default injectSheet(styles)(IconButton)
