package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"backend/routes/posts"
)

func main() {
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://localhost", "http://localhost:3000"}
	router.Use(cors.New(corsConfig))
	// router.Use(cors.Default())

	router.GET("/posts", posts.GetPosts)
	router.GET("/posts/:id", posts.GetPostById)
	router.POST("/posts", posts.PostPosts)

	router.Run("localhost:8080")
}
