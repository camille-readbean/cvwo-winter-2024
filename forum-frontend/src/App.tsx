import Home from "./pages/Home";
import PostView from "./pages/PostView";
import CreatePostPage from "./pages/PostEditor";
// import StyledThreadView from "./pages/StyledThreadView";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/posts/:postId" element={<PostView />} />
                        {/* <Route path="/thread/1/styled" element={<StyledThreadView />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/posts/post" element={<CreatePostPage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
