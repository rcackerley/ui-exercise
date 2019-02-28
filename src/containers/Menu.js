// @flow strict @format

import React from "react"

import injectSheet from "react-jss"

import classNames from "classnames"

import type { User } from "../data/user"

import Row from "../design/Row"
import IconButton from "../design/IconButton"
import Image from "../design/Image"

import menu from "../assets/icons/baseline-menu.svg"
import apps from "../assets/icons/baseline-apps.svg"
import bell from "../assets/icons/baseline-notifications.svg"
import logo from "../assets/gmail.png"

import ReactSVG from "react-svg"

import { theme } from "../design/theme"
import Search from "../components/Search"

const styles = {
  container: {
    padding: "8px",
    borderBottom: `1px solid ${theme.colors.background}`
  },
  icon: {
    fill: theme.colors.grey
  },
  spacing: {
    margin: "5px 15px 0 0px"
  },
  logo: {
    height: "40px",
    margin: "0 10px 0 0"
  },
  profile: {
    height: "30px"
  }
}

type Props = {|
  classes: { [string]: string },
  user: ?User
|}

const Menu = ({ classes, user }: Props) => (
  <Row centered={true} customStyles={classes.container}>
    <IconButton>
      <ReactSVG src={menu} className={classes.icon} />
    </IconButton>
    <Image alt={"gmail logo"} customStyles={classes.logo} src={logo} />
    <Search />
    <Row centered={true}>
      <ReactSVG
        src={apps}
        className={classNames(classes.icon, classes.spacing)}
      />
      <ReactSVG
        src={bell}
        className={classNames(classes.icon, classes.spacing)}
      />
      {user && (
        <Image
          alt={"profile picture"}
          circle={true}
          src={user.img}
          customStyles={classes.profile}
        />
      )}
    </Row>
  </Row>
)

export default injectSheet(styles)(Menu)
