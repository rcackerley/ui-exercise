// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

const styles = {
  checkbox: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    margin: 0,
    "&:checked": {
      backgroundColor: "red"
    }
  }
}

type Props = {|
  classes: { [string]: string }
|}

const Checkbox = ({ classes }: Props) => (
  <input className={classes.checkbox} type="checkbox" />
)

export default injectSheet(styles)(Checkbox)
