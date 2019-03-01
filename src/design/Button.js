// @flow strict @format

import React from "react"

import injectSheet from "react-jss"
import classNames from "classnames"

import { theme } from "./theme"

import Image from "./Image"

const styles = {
  primary: {
    backgroundColor: theme.colors.white,
    borderRadius: "20px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.16)",
    "&:hover": {
      backgroundColor: theme.colors.background,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)"
    }
  },
  button: {
    padding: "10px 15px 10px 15px",
    margin: "10px 10px 10px 10px",
    fontFamily: theme.text.family,
    fontSize: "14px",
    width: "fit-content",
    "&:focus": {
      outline: "none"
    },
    "&:active": {
      outline: "none",
      border: "none"
    },
    display: "flex",
    alignItems: "center"
  },
  icon: {
    width: "25px",
    marginRight: "10px"
  }
}

type Props = {|
  classes: { [string]: string },
  children: string,
  disabled: boolean,
  onClick: () => void,
  icon: ?string,
  customStyles: string
|}

const Button = ({
  classes,
  children,
  disabled,
  onClick,
  icon,
  customStyles
}: Props) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={classNames(classes.button, classes.primary, customStyles)}
  >
    {icon && <Image customStyles={classes.icon} src={icon} />}
    {children}
  </button>
)

export default injectSheet(styles)(Button)
