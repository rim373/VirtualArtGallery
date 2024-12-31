from sqlalchemy import create_engine, Column, Integer, String , ForeignKey,Boolean,LargeBinary,DateTime
from sqlalchemy.orm import Session,sessionmaker , relationship
from sqlalchemy.ext.declarative import declarative_base
from database import Base

# Define Event class inheriting from Base
class EVENTREQUEST(Base):
    __tablename__ = 'EventRequest'
    id = Column(Integer, primary_key=True)
    Content = Column(String(255), nullable=False)
    Organiser = Column(String(50), nullable=False)
    Date = Column(String(50), nullable=False)
    Flyer = Column(String(255), nullable=True)
    Accepted = Column(String, nullable=False, default=False)



# Define Event class inheriting from Base
class UserRequest(Base):
    __tablename__ = 'UserRequest'
    id = Column(Integer, primary_key=True)
    Name = Column(String(50), nullable=False)
    Mail = Column(String(50), nullable=False)
    pwd = Column(String(50), nullable=False)
    IsAdmin = Column(Boolean, nullable=False)
    




