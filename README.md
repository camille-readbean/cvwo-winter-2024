# Project is incomplete :construction:
:warning: Ran out of time... :snail: made this in < 24 hours in total while learning Golang...

# CVWO 2024 Winter Assignment
---

:warning: **Project is incomplete**

Web forum (using Go) geared towards a volunteer-run 
organisation to facilitate discussion relating to events they are planning  
  
:warning: **Project is incomplete**



Project Structure:

```
.
├── backend
└── forum-frontend
```

[`backend`](backend) contains the Go backend that provides the REST API for the backend with [Gin](https://github.com/gin-gonic/gin)  
[`forum-frontend`](forum-frontend) based on the provided sample [React application](https://github.com/CVWO/sample-react-app/)  
  
(left as todo) Database: SQLite  
Schema was 80% designed in mid-term assignment  

# User Manual
[backend] From `backend` folder, run `go run server/main.go`  
[frontend] From `forum-frontend` folder, run `npm run start`  
[database]  Doesn't exist.

`/`                 - list of all posts  
`/posts/:id`        - view of specific post  
`/posts/post`       - post a post  

Only contains posts.  
Comments do not work...  

## Features:
Comments [Incomplete :construction:]
Tagging [incomplete :construction:]  
Login [ Not implemented :construction:]  
Email notifications [ Not implemented :construction:]  
RSVP system [ Not implemented :construction:]

# Deployment in prod
Plan was in place but...

```
Reverse proxy (Caddy) -> /api -> Gin
                      -> /    -> static React files
```
