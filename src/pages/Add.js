import React from "react"
import { Layout } from "../components"
import GlobalContext, { ADD_POST } from "../context"
// import { db } from "brownies"

function Add() {
  const [title, setTitle] = React.useState("")
  const [body, setBody] = React.useState("")
  const { dispatch, state } = React.useContext(GlobalContext)

  function handleSubmit() {
    dispatch({ type: ADD_POST, payload: { title, body } })
    console.log(state)
  }

  return (
    <Layout>
      <h3>Add Blog</h3>
      <input
        value={title}
        type="text"
        placeholder="title"
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <br />
      <textarea
        value={body}
        cols="30"
        rows="10"
        placeholder="post"
        onChange={e => setBody(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </Layout>
  )
}

export default Add
