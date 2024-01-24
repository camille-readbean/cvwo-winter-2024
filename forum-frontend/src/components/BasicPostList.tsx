import "../App.css";
import { PostItem } from "./PostItem"; // Adjust the import path as needed
import { Post } from "../types/Post";
import React, { useState, useEffect } from "react";

const BasicThreadList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`http://localhost:8080/posts`); // Adjust the URL as needed
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div style={{ width: "25vw", margin: "auto", textAlign: "center" }}>
            <h4>Welcome to my forum!</h4>
            <ul>
                {posts.map((post) => (
                    <li key={post.postId}>
                        <PostItem post={post} notMain={true} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BasicThreadList;
