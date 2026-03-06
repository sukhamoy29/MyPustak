from pydantic import BaseModel

class PostCreate(BaseModel):
    title:str
    body:str

class Post(BaseModel):
    id:int
    title:str
    body:str