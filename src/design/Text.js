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
  },
  h6: {
    margin: 0
  }
}

type Props = {|
  classes: { [string]: string },
  children: string,
  uppercase: ?boolean,
  variant: string,
  customStyles: string,
  inTable: boolean
|}

const Text = ({
  variant,
  classes,
  children,
  uppercase,
  customStyles,
  inTable
}: Props) =>
  inTable ? (
    <h6
      className={classNames(
        classes.text,
        classes[variant],
        classes.h6,
        uppercase && classes.uppercase,
        customStyles
      )}
    >
      {children}
    </h6>
  ) : (
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
