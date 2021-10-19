import React from "react";
import Comment from "./Comment";

export const CommentList = (props) => {
  if (props.comments.length > 0) {
    return (
      <div>
        <h5>
          <span>{props.comments.length}</span>{" "}
          Comment{props.comments.length > 0 ? "s" : ""}
        </h5>
        {props.comments.map((comment, index) => (
          <Comment key={index} comment={comment} depth={1} first={true} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h5>
          <span>{props.comments.length}</span>{" "}
          Comment{props.comments.length > 0 ? "s" : ""}
        </h5>

        {props.comments.length === 0 && !props.loading ? (
          <div>
            Be the first to comment
          </div>
        ) : null}
      </div>
    );
  }

}