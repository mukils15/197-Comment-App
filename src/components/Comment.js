import React, { useState } from "react";
import { CommentForm } from "./CommentForm";
import { Voter } from "./Voter";
import 'style.css'

export default function Comment(props) {
    if (props.depth === 0) {
        return null;
    }

    const [highDepth, setHigh] = useState(props.highDepth);
    const [depth, setDepth] = useState(props.depth)
    const [nextLevel, setNext] = useState(props.nextLevel);

    const [commList, setList] = useState([])

    const reply = () => {
        if (highDepth > 0 && highDepth < 3) {
            if (nextLevel > 0) {
                setDepth(depth);
                setList(commList.concat(<div style={{ margin: 25 }}>
                    <CommentForm post={true} depth={depth - 1} highDepth={highDepth + 1} />
                </div>));
            } else if (nextLevel === undefined) {
                setNext(1);
                setDepth(depth + 1);
            }
        } else if (highDepth === 0 || highDepth === undefined) {
            setDepth(depth + 1);
            setNext(1);
            setHigh(1);
            setNext(1);
        }
    }

    if (props.comment !== null && props.comment !== undefined) {
        let widthComm = "" + (750 + 350 * depth);
        return (
            <div style={{ borderLeft: '2px solid rgba(100, 100, 100, 0.5)', width: widthComm }}>
                <div>
                    <h6 fontSize={20}>{"User: " + props.comment.name}</h6>
                    {props.comment.message}
                </div>
                <div style={{ margin: 25 }}>
                    {<Comment depth={depth - 1} nextLevel={0} highDepth={highDepth} />}
                    {commList}
                </div>
                <div>
                    <Voter />
                    <button onClick={reply}>
                        Reply
                    </button>
                </div>

            </div>
        );
    } else {
        return (
            <div style={{ margin: 25 }}>
                <CommentForm post={true} depth={depth - 1} highDepth={highDepth + 1} />
            </div>
        )
    }

}