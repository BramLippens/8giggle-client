import { useState } from "react";
import PostCard from "../posts/PostCard";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: 1,
            title: "Love For All, Hatred For None.",
            image: "https://picsum.photos/1080",
            username: "John Doe",
            createdAt: "5 minutes ago",
            likes: 5,
            comments: 2,
        },
        {
            _id: 2,
            title: "Love For All, Hatred For None.",
            image: "https://picsum.photos/1080",
            username: "John Doe",
            createdAt: "5 minutes ago",
            likes: 5,
            comments: 2,
        },
        {
            _id: 3,
            title: "Love For All, Hatred For None.",
            image: "https://picsum.photos/1080",
            username: "John Doe",
            createdAt: "5 minutes ago",
            likes: 5,
            comments: 2,
        },
        {
            _id: 4,
            title: "Love For All, Hatred For None.",
            image: "https://picsum.photos/1080",
            username: "John Doe",
            createdAt: "5 minutes ago",
            likes: 5,
            comments: 2,
        },
        {
            _id: 5,
            title: "Love For All, Hatred For None.",
            image: "https://picsum.photos/1080",
            username: "John Doe",
            createdAt: "5 minutes ago",
            likes: 5,
            comments: 2,
        },
    ]);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {posts.map((post) => (
                <>
                    <PostCard key={post._id} post={post} />
                    {/* line that seperates each card */}
                    <div className="w-96 h-0.5 bg-[#50545F] rounded-full"></div>
                </>   
            ))}
        </div>
    );
};

export default Feed;