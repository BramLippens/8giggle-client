import { useState } from "react";
import PostCard from "../posts/PostCard";
import api from "../api/api";
import { useEffect } from "react";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get("/posts", {
                params: {
                    page: 0,
                    size: 10,
                }
            });
            console.log(response.data);
            setPosts(response.data.content);
        }
        fetchData();
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {posts.map((post) => (
                <div key={post.id}>
                    <PostCard key={post.id} post={post} />
                    {/* line that seperates each card */}
                    <div className="w-96 h-0.5 bg-[#50545F] rounded-full"></div>
                </div>   
            ))}
        </div>
    );
};

export default Feed;