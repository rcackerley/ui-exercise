// @flow strict @format

import React from "react"
import type { Node } from "react"

import injectSheet from "react-jss"

import classNames from "classnames"

type Props = {|
  classes: { [string]: string },
  customStyles: string,
  children: Node,
  centered: boolean,
  onClick: ?() => void,
  onMouseEnter: ?() => void,
  onMouseLeave: ?() => void,
  inTable: ?boolean,
  inTableRow: ?boolean
|}

const styles = {
  row: {
    display: "flex"
  },
  center: {
    alignItems: "center"
  }
}

const Row = ({
  classes,
  children,
  customStyles,
  centered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  inTable,
  inTableRow
}: Props) =>
  inTable ? (
    <tr
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={classNames(
        classes.row,
        customStyles,
        centered && classes.center
      )}
    >
      {children}
    </tr>
  ) : inTableRow ? (
    <td
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={classNames(
        classes.row,
        customStyles,
        centered && classes.center
      )}
    >
      {children}
    </td>
  ) : (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
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
