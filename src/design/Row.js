// @flow strict @format

import React from "react"
import type { Node } from "react"

import injectSheet from "react-jss"

import classNames from "classnames"

type Props = {|
  classes: { [string]: string },
  customStyles: string,
  children: Node,
  centered: boolean
|}

const styles = {
  row: {
    display: "flex"
  },
  center: {
    alignItems: "center"
  }
}

const Row = ({ classes, children, customStyles, centered }: Props) => (
  <div
    className={classNames(
      classes.row,
      customStyles,
      centered && classes.center
    )}
  >
    {children}
  </div>
)

export default injectSheet(styles)(Row)
