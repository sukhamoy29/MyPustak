import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});

export const getPosts = () => API.get("/posts");
export const createPost = (data) => API.post("/posts",data);
export const deletePost = (id) => API.delete(`/posts/${id}`);
