export interface Post {
    postId: number;
    userName: string;
    userId: number;
    title: string;
    content: string;
    eventDetails: string;
    createdAt: string; // coming in from JSON, will be a string
    updatedAt: string;
    tags: string[];
}
