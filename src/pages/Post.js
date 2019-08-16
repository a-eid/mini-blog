import React from "react"
import { Layout } from "../components"
import GlocalContext, { ADD_COMMENT, DELETE_COMMENT } from "../context"

function Post({ match: { params } }) {
  const { posts } = React.useContext(GlocalContext)
  const post = posts[params.id]
  return (
    <Layout>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <CommentsForm id={post.id} />
      <CommentsList id={post.id} />
    </Layout>
  )
}

function CommentsForm({ id }) {
  const [name, setName] = React.useState("")
  const [comment, setComment] = React.useState("")
  const { dispatch } = React.useContext(GlocalContext)

  function submit() {
    dispatch({
      type: ADD_COMMENT,
      payload: {
        postId: id,
        name,
        comment,
      },
    })
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="your name"
        onChange={e => setName(e.target.value)}
      />

      <br />
      <br />
      <textarea
        cols="30"
        rows="10"
        placeholder="your comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  )
}

function CommentsList({ id }) {
  const { dispatch, posts } = React.useContext(GlocalContext)
  const post = posts[id]
  const commentsKeys = Object.keys(post.comments)

  if (commentsKeys.length === 0) {
    return <p>No comments for this post just yet.</p>
  }

  return (
    <div>
      {commentsKeys.map(key => (
        <CommentItem
          key={key}
          remove={() =>
            dispatch({
              type: DELETE_COMMENT,
              payload: {
                postId: id,
                id: key,
              },
            })
          }
          comment={post.comments[key]}
        />
      ))}
    </div>
  )
}

function CommentItem({ remove, comment: { name, comment } }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{comment}</p>
      <button onClick={remove}>Delete</button>
    </div>
  )
}

export default Post
