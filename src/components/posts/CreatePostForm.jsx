import React, { useState } from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';

function CreatePostForm() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Do something with the title and image data, such as sending it to a server
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", image);

        await api.post("/posts", formData);

        console.log("Post created");
        navigate("/", {replace: true});
    };

    return (
        <div className="flex justify-center items-start h-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-20">
                <div className="mb-6">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Post</button>
                </div>
            </form>
        </div>
    );
}

export default CreatePostForm;