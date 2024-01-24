package database

import (
	"backend/types"
	"time"
)

var p1 = types.Post{
	PostID:       1,
	UserID:       1,
	UserName:     "Aiken Dueet",
	Title:        "Test Post",
	Content:      "Helloooo\n World!!",
	EventDetails: "Taking place at dd/mm/yyyy",
	CreatedAt:    time.Now(),
	UpdatedAt:    time.Now(),
	Tags:         []string{"new", "upcoming"},
}

var p2 = types.Post{
	PostID:       2,
	UserID:       3,
	UserName:     "Lol no",
	Title:        "Hey there",
	Content:      "Good stuff happening tomorrow!\n",
	EventDetails: "Taking place at 17/01/2024",
	CreatedAt:    time.Now().AddDate(0, 0, -1),
	UpdatedAt:    time.Now().AddDate(0, 1, 0),
	Tags:         []string{"new", "upcoming"},
}

var Ps = []types.Post{
	p1,
	p2,
}
