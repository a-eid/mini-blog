import React from "react"
import produce from "immer"
import uuid from "uuid/v4"

export const ADD_POST = "ADD_POST"
export const DELETE_POST = "DELETE_POST"

export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export default React.createContext()

// {
//   posts: {
//     [id]: post,
//   comments: {
//     [id]: comment
//   }}
// }

export function reducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_POST:
        const postId = uuid()
        draft.posts[postId] = {
          id: postId,
          ...action.payload,
          comments: {},
        }
        return draft
      case DELETE_POST:
        delete draft.posts[action.payload.id]
        return draft
      case ADD_COMMENT:
        let commentId = uuid()
        draft.posts[action.payload.postId].comments[commentId] = {
          ...action.payload,
          id: commentId,
        }
        return draft
      case DELETE_COMMENT:
        delete draft.posts[action.payload.postId].comments[action.payload.id]
        return draft
      default:
        throw new Error("UNKNOWN ACTION..")
    }
  })
}
