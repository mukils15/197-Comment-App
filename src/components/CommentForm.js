import React, { useState } from "react";
import Comment from "./Comment";
import 'style.css'

export const CommentForm = (props) => {
  const [loading, setLoad] = useState(false)
  const [comment, setComm] = useState({ name: "", message: "" });

  const handleFieldChange = (event) => {
    const { value, name } = event.target;
    if (name === "name") {
      setComm({
        name: value,
        message: comment.message
      })
    } else {
      setComm({
        name: comment.name,
        message: value
      })
    }
  }

  const [postSubmit, setSubmit] = useState({ commentSub: "", submit: false, depth: 0 });
  if (props.post === true && postSubmit.submit === true) {
    const commentSend = {
      name: postSubmit.commentSub.name,
      message: postSubmit.commentSub.message
    }
    return (
      <div>
        <Comment comment={commentSend} depth={1} maxDepth={postSubmit.depth} highDepth={props.highDepth} />
      </div>
    )
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const commentSend = comment;

    if (props.post) {
      setSubmit({
        commentSub: commentSend,
        submit: true,
        depth: props.maxDepth
      });
    } else if (props.comm !== undefined && props.comm.length > 0 && props.load === true) {
      props.setLoad(commentSend);
    } else {
      props.addComment(commentSend);
    }

    setComm({
      name: "",
      message: ""
    })
    setLoad(false);
  }

  if (comment.name === "" || comment.message === "") {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <input
            onChange={handleFieldChange}
            value={comment.name}
            placeholder="Username"
            name="name"
            type="text"
          />
        </div>

        <div>
          <textarea
            onChange={handleFieldChange}
            value={comment.message}
            placeholder="Post"
            name="message"
          />
        </div>

        <div>
          <button disabled={true}>
            Submit
          </button>
        </div>
      </form>
    )
  } else {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <input
            onChange={handleFieldChange}
            value={comment.name}
            placeholder="Username"
            name="name"
            type="text"
          />
        </div>

        <div>
          <textarea
            onChange={handleFieldChange}
            value={comment.message}
            placeholder="Post"
            name="message"
          />
        </div>

        <div>
          <button disabled={false}>
            Submit
          </button>
        </div>
      </form>
    )
  }

}