import React, { useState } from "react";

export const Voter = () => {
    const [votes, setVotes] = useState(0);

    const upvote = () => {
        setVotes(votes + 1);
    }

    const downvote = () => {
        setVotes(votes - 1);
    }

    return (
        <div>
            <button onClick={upvote}> Up </button>
            {votes}
            <button onClick={downvote}> Down </button>
        </div>

    )
}