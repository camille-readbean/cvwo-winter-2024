package types

import "time"

type Post struct {
	PostID       int       `json:"postId"`
	UserName     string    `json:"userName"`
	UserID       int       `json:"userId"`
	Title        string    `json:"title"`
	Content      string    `json:"content"`
	EventDetails string    `json:"eventDetails"`
	CreatedAt    time.Time `json:"createdAt"`
	UpdatedAt    time.Time `json:"updatedAt"`
	Tags         []string  `json:"tags"`
}
