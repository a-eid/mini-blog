import React from "react"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <div className="page-container">
      <Header />
      {children}
    </div>
  )
}
