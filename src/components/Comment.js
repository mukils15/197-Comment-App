import React, { useState, useEffect } from "react";
import { CommentForm } from "./CommentForm";
import { Voter } from "./Voter";
import { ReactDOM } from "react";
import 'style.css'

export default function Comment(props) {
    if (props.depth === 0){
        return null;
    } 

    const [highDepth, setShow] = useState(props.highDepth);
    const [depth, setDepth] = useState(props.depth)
    const [nextLevel, setNext] = useState(props.nextLevel);

    const reply = () => {
        if (highDepth > 0 && highDepth <= 5 ){
            setShow(highDepth+1);
            setDepth(depth+1);
            setNext(1);
        } else if (highDepth === 0 || highDepth === undefined){
            setDepth(depth+1);
            setNext(1);
            setShow(1);
        }   
    }

    if (props.comment !== null && props.comment !== undefined){
        return (
            <div className="media mb-5" style={{border: '2px solid rgba(100, 100, 100, 1)'}}>
              <div className="media-body p-2 shadow-sm rounded bg-light border">
                <h6 className="mt-0 mb-1 text-muted" fontSize={20}>{props.comment.name}</h6>
                {props.comment.message}
                <Voter/>
              </div>
              <br>
              </br>
              <div className = "ok" style={{margin: 25}}>
                    {<Comment depth = {depth-1} nextLevel= {0} highDepth = {highDepth}/>}
              </div>
              <button onClick={reply}>
                  Reply
              </button>
            </div>
        );
    } else  {
        return (
            <div style={{margin: 25}}>
                    <CommentForm post = {true} depth = {depth-1} highDepth = {highDepth+1}/>
            </div>
        )
    }
    
  }