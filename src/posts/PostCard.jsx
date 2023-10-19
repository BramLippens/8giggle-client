import React from 'react';
import Footer from './Footer';

const PostCard = ({post}) => {
  return (
    <div className="w-96 h-auto bg-inherit rounded-lg overflow-hidden mt-10">
        <div className='capitalize ml-1 pb-4 text-2xl text-white'>
            {post.title}
        </div>
        <img src={post.image} alt="Post" className="w-full h-80 object-cover object-center" />
        <Footer />
    </div>
  );
};

export default PostCard;
