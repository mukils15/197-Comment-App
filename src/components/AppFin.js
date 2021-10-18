import React, {useState, useEffect} from "react";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import Comment from "./Comment";

export const AppFin = () => {
    const [loading, setLoad] = useState(false)
    const [commList, setList] = useState([]);

    const addComment = (comment) => {
        if (loading === false){
            commList.push(comment)
            setLoad(true);
        }
    }

    const addFalse = (comment) => {
        commList.push(comment)
        setLoad(false);
    }


    return (
            <div className="App container bg-light shadow" >
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                <header className="App-header">
                  <h1 className="App-title">
                    React Comments
                    <span className="px-2" role="img" aria-label="Chat">
                      💬
                    </span>
                  </h1>
                </header>
              </div>
              
              <div className="row" style={{display: 'flex',  justifyContent:'center',  height: '50vh'}}>
                <div className="col-4  pt-3 border-right">
                  <h6>Say something about React</h6>
                  <CommentForm addComment={addComment} setLoad = {addFalse} comm = {commList} load = {loading}/>
                <CommentList
                    loading={loading}
                    comments={commList}
                />
                </div>
              </div>
            </div>
          );
        }

    
