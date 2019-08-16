import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../components"
import GlobalContext, { DELETE_POST } from "../context"

function Home() {
  const { dispatch, posts } = React.useContext(GlobalContext)
  function deletePost(id) {
    dispatch({ type: DELETE_POST, payload: { id } })
  }

  return (
    <Layout>
      {Object.keys(posts).map(key => {
        return (
          <Post
            remove={() => deletePost(key)}
            post={posts[key]}
            id={key}
            key={key}
          />
        )
      })}
    </Layout>
  )
}

function Post({ remove, post: { id, title, body, comments = {} } }) {
  return (
    <div>
      <Link to={`/post/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        {body.substring(0, 100)}
        {body.length > 100 && "..."}
      </p>
      <span>comments count: {Object.keys(comments).length}</span>
      <button onClick={remove}>Delete</button>
    </div>
  )
}

export default Home
