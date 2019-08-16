import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import { local } from "brownies"

import GlobalContext, { reducer } from "../context"

import Home from "./Home"
import Add from "./Add"
import Post from "./Post"

export default () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    null,
    () =>
      local.state || {
        posts: {},
      },
  )

  React.useEffect(() => {
    local.state = state
  }, [state])

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <Route component={Home} path="/" exact />
        <Route component={Add} path="/add" exact />
        <Route component={Post} path="/post/:id" exact />
      </GlobalContext.Provider>
    </BrowserRouter>
  )
}
