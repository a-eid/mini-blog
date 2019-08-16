import React from "react"
import { NavLink } from "react-router-dom"

const activeStyle = { color: "green" }

function Header() {
  return (
    <div className="app-header">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      &nbsp;&nbsp;
      <NavLink to="/Add" activeStyle={activeStyle}>
        ADD
      </NavLink>
    </div>
  )
}

export default Header
