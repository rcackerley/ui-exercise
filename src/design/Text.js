// @flow strict @format

import React from "react"
import { theme } from "./theme"

import injectSheet from "react-jss"

import classNames from "classnames"

const styles = {
  text: {
    fontFamily: theme.text.family
  },
  h1: {
    fontSize: "26px",
    fontWeight: 600,
    color: theme.colors.tertiary,
    marginBottom: "15px"
  },
  h2: {
    fontSize: "16px",
    fontWeight: 600,
    color: theme.colors.tertiary
  },
  h3: {
    fontSize: "12px",
    fontWeight: 400,
    color: theme.colors.tertiary
  },
  h4: {
    fontSize: "14px",
    fontWeight: 400,
    color: theme.colors.tertiary
  },
  h5: {
    fontSize: "14px",
    fontWeight: 300,
    color: theme.colors.tertiary
  },
  h6: {
    fontSize: "12px",
    fontWeight: 300,
    letterSpacing: "1px"
  },
  p: {
    fontSize: "12px",
    fontWeight: 400,
    color: theme.colors.black
  },
  link: {
    fontSize: "14px",
    fontWeight: 300,
    color: theme.colors.tertiary
  },
  uppercase: {
    textTransform: "uppercase"
  }
}

type Props = {|
  classes: { [string]: string },
  children: string,
  uppercase: ?boolean,
  variant: string,
  selected: ?boolean,
  deselected: ?boolean,
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
