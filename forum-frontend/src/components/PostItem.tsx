import { Post } from "../types/Post";
import { Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";

type Props = {
    notMain: boolean;
    post: Post | null;
};

export const PostItem: React.FC<Props> = ({ notMain, post }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h4">{post?.title ?? "Title"}</Typography>
            <Typography variant="caption">
                Poster: {post?.userName ?? "Unknown"}
                <br />
                Time posted: {post?.createdAt ? new Date(post.createdAt).toDateString() : "Unknown date"}
            </Typography>
            <Typography variant="subtitle2">Tags: {post?.tags.join(", ") ?? ""}</Typography>
            {!notMain && (
                <Typography variant="body1">{post?.content ?? "Post is empty, maybe still fetching"}</Typography>
            )}
            {notMain && post && <Link to={`/posts/${post.postId}`}>Click here to go to the post</Link>}
        </Paper>
    );
};
