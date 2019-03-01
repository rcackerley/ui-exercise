// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

import { theme } from "../design/theme"
import ReactSVG from "react-svg"

import search from "../assets/icons/baseline-search.svg"

import Row from "../design/Row"

const styles = {
  input: {
    backgroundColor: theme.colors.background,
    padding: "10px 50px 10px 50px",
    borderRadius: "5px",
    border: "none",
    flex: 1,
    fontFamily: theme.text.family,
    color: theme.colors.normal,
    maxWidth: "587px",
    fontSize: "16px",
    "&:focus": {
      boxShadow: "0 0 20px rgba(0,0,0, .25)",
      outline: "none",
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.background}`
    },
    "&::placeholder": {
      color: theme.colors.grey,
      fontFamily: theme.text.family,
      marginRight: "10px",
      fontSize: "16px"
    }
  },
  icon: {
    height: "30px",
    fill: theme.colors.grey,
    position: "relative",
    paddingTop: "10px",
    left: "40px"
  },
  row: {
    flex: 1,
    marginLeft: "10px",
    "@media (max-width: 600px)": {
      display: "none"
    }
  }
}

type Props = {|
  classes: { [string]: string }
|}

const Search = ({ classes }: Props) => (
  <Row customStyles={classes.row}>
    <ReactSVG svgClassName={classes.icon} src={search} />
    <input placeholder={"Search mail"} className={classes.input} />
  </Row>
)

export default injectSheet(styles)(Search)
