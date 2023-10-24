import { useContext, useState } from "react";
import api from "../../api/api";
import { UserContext } from "../../contexts/UserContext";

const Voting = ({post}) => {
    const [votes, setVotes] = useState(0);
    const {accessToken} = useContext(UserContext);
    const handleUpvote = async () => {
        await api.put(`/posts/${post.id}/upvote`, {}, {headers: { Authorization: `Bearer ${accessToken}` }})
        setVotes(votes + 1)
    };

    const handleDownvote = async () => {
        await api.put(`/posts/${post.id}/downvote`, {}, {headers: { Authorization: `Bearer ${accessToken}` }})
        setVotes(votes - 1)
    };

    return (
        <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-inherit text-white focus:outline-none" onClick={handleUpvote}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
                </svg>
            </button>
            <div className="text-white">
                {votes}
            </div>
            <button className="p-2 rounded-full bg-inherit text-white focus:outline-none" onClick={handleDownvote}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
        </div>
    );
};

export default Voting;