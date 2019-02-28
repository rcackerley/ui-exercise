// @flow strict @format

import React from "react"

import { Router, Route } from "react-router-dom"

import App from "./App"

import createHistory from "history/createBrowserHistory"

const AppRouter = () => {
  return (
    <Router history={createHistory()}>
      <>
        <Route path="/" component={App} />
      </>
    </Router>
  )
}

export default AppRouter
