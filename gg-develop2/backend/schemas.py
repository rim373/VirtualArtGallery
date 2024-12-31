from pydantic import BaseModel,HttpUrl
from typing import Dict,List, Union , Optional,Any
from datetime import datetime



class EventRequest(BaseModel):
    Content: str
    Organiser: str
    Date: str
    Flyer: str


class EventRequestwithID(BaseModel):
    id:int
    Content: str
    Organiser: str
    Date: str
    Flyer: str
    
    

    
class EventResponse(BaseModel):
    Content: str
    Organiser: str
    Date: str
    Flyer: str
    Accepted : str | None = None
    

class User(BaseModel):
    Name: str
    Mail: str
    pwd: str
    IsAdmin: bool

class LoginRequest(BaseModel):
    Mail: str
    pwd: str

    
  

class RequestResponse(BaseModel):
    result: bool
    message: str
    data: Any

