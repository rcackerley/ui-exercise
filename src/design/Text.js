// @flow strict @format

import React from "react"
import { theme } from "./theme"

import injectSheet from "react-jss"

import classNames from "classnames"

const styles = {
  text: {
    fontFamily: theme.text.family,
    fontSize: "14px"
  },
  p: {
    fontWeight: 400,
    color: theme.colors.black
  },
  secondary: {
    color: theme.colors.grey
  },
  small: {
    fontSize: "12px",
    color: theme.colors.grey
  }
}

type Props = {|
  classes: { [string]: string },
  children: string,
  uppercase: ?boolean,
  variant: string,
  customStyles: string
|}

const Text = ({
  variant,
  classes,
  children,
  uppercase,
  customStyles
}: Props) => (
  <span
    className={classNames(
      classes.text,
      classes[variant],
      uppercase && classes.uppercase,
      customStyles
    )}
  >
    {children}
  </span>
)

export default injectSheet(styles)(Text)
