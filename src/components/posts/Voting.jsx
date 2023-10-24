import { useContext } from "react";
import api from "../../api/api";
import { UserContext } from "../../contexts/UserContext";

const Voting = ({post_id}) => {
    const {accessToken} = useContext(UserContext);
    const handleUpvote = () => {
        api.post(`/posts/${post_id}/upvote`, {}, {headers: { Authorization: `Bearer ${accessToken}` }})
    };

    const handleDownvote = () => {
        api.post(`/posts/${post_id}/downvote`, {}, {headers: { Authorization: `Bearer ${accessToken}` }})
    };

    return (
        <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-inherit text-white focus:outline-none" onClick={handleUpvote}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
                </svg>
            </button>
            <div className="text-white">
                5
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