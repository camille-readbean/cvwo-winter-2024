// import { Post } from "../types/Post";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type PostSubmissionDetails = {
    userName: string;
    title: string;
    content: string;
    tags: string[];
};

const PostForm = () => {
    const [post, setPost] = useState<PostSubmissionDetails>({
        userName: "",
        title: "",
        content: "",
        tags: [],
    });

    const nav = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log("Post submitted successfully:", responseData);
            // todo: make reply return new status code
            // redirect to home page
            nav("/");
        } catch (error) {
            console.error("Failed to submit post:", error);
            // Handle errors here (like showing an error message)
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 3, margin: 3 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Create a New Post
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ marginBottom: 2 }}>
                    <TextField fullWidth label="Title" name="title" value={post.title} onChange={handleChange} />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <TextField
                        fullWidth
                        label="Content"
                        name="content"
                        multiline
                        rows={4}
                        value={post.content}
                        onChange={handleChange}
                    />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <TextField
                        fullWidth
                        label="Tags (comma-separated)"
                        name="tags"
                        value={post.tags}
                        onChange={handleChange}
                    />
                </Box>
                <Button variant="contained" color="primary" type="submit">
                    Post
                </Button>
            </form>
        </Paper>
    );
};

export default PostForm;
