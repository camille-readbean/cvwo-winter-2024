import BasicThreadList from "../components/BasicPostList";
import React from "react";

import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <>
            <h3>
                {"Welcome to CVWO's sample react app! Here's a basic list of forum threads for you to experiment with."}
            </h3>
            <br />
            <Link to={`/posts/post`}>Click here to create a post</Link>
            <br />
            <BasicThreadList />
        </>
    );
};

export default Home;
