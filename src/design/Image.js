// @flow strict @format

import React from "react"

type Props = {|
  customStyles: ?string,
  src: string
|}

const Image = ({ customStyles, src }: Props) => (
  <img src={src} className={customStyles} />
)

export default Image
