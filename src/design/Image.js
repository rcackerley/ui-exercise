// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

import classNames from "classnames"

const styles = {
  circle: {
    borderRadius: "50%"
  }
}

type Props = {|
  customStyles: ?string,
  src: string,
  circle: boolean,
  alt: string,
  classes: { [string]: string }
|}

const Image = ({ customStyles, src, circle, classes, alt }: Props) => (
  <img
    src={src}
    alt={alt}
    className={classNames(customStyles, circle && classes.circle)}
  />
)

export default injectSheet(styles)(Image)
