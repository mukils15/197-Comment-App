import React, { useState } from "react";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export const AppFin = () => {
  const [loading, setLoad] = useState(false)
  const [commList, setList] = useState([]);

  const addComment = (comment) => {
    if (loading === false) {
      commList.push(comment)
      setLoad(true);
    }
  }

  const addFalse = (comment) => {
    commList.push(comment)
    setLoad(false);
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', height: '10vh' }}>
        <header>
          <h1>
            React Comments
          </h1>
        </header>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', height: '50vh' }}>
        <div>
          <h6>Say something!</h6>
          <CommentForm addComment={addComment} setLoad={addFalse} comm={commList} load={loading} />
          <CommentList
            loading={loading}
            comments={commList}
          />
        </div>
      </div>
    </div>
  );
}


