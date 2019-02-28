// @flow strict @format

import React from "react"
import type { Node } from "react"

import injectSheet from "react-jss"

import classNames from "classnames"

type Props = {|
  classes: { [string]: string },
  children: Node,
  centered: boolean,
  customStyles: string
|}

const styles = {
  column: {
    display: "flex",
    flexDirection: "column"
  },
  centered: {
    alignItems: "center"
  }
}

const Column = ({ classes, children, centered, customStyles }: Props) => (
  <div
    className={classNames(
      classes.column,
      centered && classes.centered,
      customStyles
    )}
  >
    {children}
  </div>
)

export default injectSheet(styles)(Column)
