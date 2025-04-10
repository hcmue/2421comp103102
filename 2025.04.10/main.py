from fastapi import FastAPI, Depends
from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Annotated

app = FastAPI()

engine = create_engine("mysql+pymysql://root:@localhost/2421comp103102")

class User(SQLModel, table=True):    
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    password: str
    role: int = Field(default=None)
    is_active: bool | None = Field(default=True)

def create_db_and_tables():    
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get("/")
def root():
    return {"message": "Hello World"}