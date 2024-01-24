import BasicCommentList from "../components/CommentList";
import { Post } from "../types/Post";
import { PostItem } from "../components/PostItem";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";

const PostView: React.FC = () => {
    // const [isShowButton, setIsShowButton] = useState(false);

    // const hideButton = () => {
    //     setIsShowButton(false);
    // };

    // const showButton = () => {
    //     setIsShowButton(true);
    // };

    const [post, setPost] = useState<Post | null>(null);
    const { postId } = useParams<{ postId: string }>();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:8080/posts/${postId}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.text}`);
                }
                const p: Post = await response.json();
                setPost(p);
            } catch (error) {
                console.error("Failed to fetch post", error);
            }
        };

        fetchPost();
    }, [postId]);

    return (
        <Box sx={{ padding: 2 }}>
            <PostItem post={post} notMain={false} />

            {/* Comment Posting Box */}
            <Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h6">Leave a Comment</Typography>
                <TextField
                    fullWidth
                    label="Your Comment"
                    multiline
                    rows={4}
                    placeholder="Type your comment here"
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" color="primary">
                    Post Comment
                </Button>
            </Paper>
            <BasicCommentList />
        </Box>
        // <div style={{ width: "25vw", margin: "auto", textAlign: "center" }}>
        //     <h3>{"Inspirational Quotes"}</h3>
        //     <h4>{"Thread started by Aiken"}</h4>
        //     <BasicCommentList styled={false} />
        //     <Link to="/">{`<- Back to threads`}</Link>
        // </div>
    );
};

export default PostView;
