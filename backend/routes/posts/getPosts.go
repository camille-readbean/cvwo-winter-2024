package posts

import (
	"backend/database"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetPosts(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, database.Ps)
}

func GetPostById(c *gin.Context) {
	// id := c.Param("id") // path parameter

	// for i := 0; i < len(ps); i++ {
	// 	if ps[i].PostID == id {
	// 		c.IndentedJSON(http.StatusFound, ps[i])
	// 		return
	// 	}
	// }
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Loop over the list of albums, looking for
	// an album whose ID value matches the parameter.

	for _, a := range database.Ps {
		if a.PostID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "post not found"})
}
