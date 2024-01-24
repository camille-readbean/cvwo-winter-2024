package posts

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"backend/database"
	"backend/types"
)

func PostPosts(c *gin.Context) {
	var newPost types.Post

	// := is a short variable declaration
	if err := c.BindJSON(&newPost); err != nil {
		c.IndentedJSON(http.StatusBadRequest, err.Error())
		return
	}
	newPost.CreatedAt = time.Now()
	newPost.UpdatedAt = time.Now()
	newPost.PostID = len(database.Ps) + 1
	newPost.UserID = len(database.Ps) + 1

	// Updating tags
	// stub

	// write to DB
	database.Ps = append(database.Ps, newPost)

	c.IndentedJSON(http.StatusCreated, newPost)
}
