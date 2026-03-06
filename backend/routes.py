from fastapi import APIRouter, HTTPException, status
from models import posts
from schemas import PostCreate

router =  APIRouter()

@router.get("/posts")
def get_posts():
    return posts


# create post
@router.post("/posts")
def create__posts(post:PostCreate):
    new_post ={
        "id": len(posts)+1,
        "title": post.title,
        "body": post.body
    }
    posts.append(new_post)
    return new_post


# delete post

@router.delete("/posts/{post_id}")
def delete_post(post_id: int):
    for post in posts:
        if post["id"] == post_id:
            posts.remove(post)
            return{"message":"post deleted"}
        
    raise HTTPException(status_code=404,detail="post not found")