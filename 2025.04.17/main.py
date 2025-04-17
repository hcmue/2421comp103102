from fastapi import FastAPI, Depends, Query, HTTPException
from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Annotated

app = FastAPI()

engine = create_engine("mysql+pymysql://root:@localhost/2421comp103102")


#########Định nghĩa các model ứng với các bảng trong DB
class User(SQLModel, table=True):    
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    password: str
    role: int = Field(default=None)
    is_active: bool | None = Field(default=True)

class Loai(SQLModel, table=True):    
    MaLoai: int | None = Field(default=None, primary_key=True)
    TenLoai: str = Field(index=True)

class HangHoa(SQLModel, table=True):    
    MaHH: int | None = Field(default=None, primary_key=True)
    TenHH: str = Field(index=True)
    Hinh: str = Field()
    MaLoai: int | None =  Field(foreign_key="loai.MaLoai")

#########///Định nghĩa các model ứng với các bảng trong DB

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


@app.post("/users/", tags=["user"])
def create_user(model: User, session: SessionDep) -> User:
    session.add(model)
    session.commit()
    session.refresh(model)
    return model

@app.get("/users/", tags=["user"])
def read_users(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[User]:
    users = session.exec(
        select(User).offset(offset).limit(limit)
    ).all()
    return users

@app.get("/users/search", tags=["user"])
def read_users(
    q: str,
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[User]:
    users = session.exec(
        select(User)
        .where(User.username == q)
        .offset(offset).limit(limit)
    ).all()
    return users

@app.get("/users/{user_id}", tags=["user"])
def read_user(user_id: int, session: SessionDep) -> User:
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail=f"User {user_id} not found"
        )
    return user

@app.delete("/users/{user_id}", tags=["user"])
def delete_user(user_id: int, session: SessionDep):
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail=f"User {user_id} not found"
        )
    try:
        session.delete(user)
        session.commit()
        return {"success": True}
    except Exception as ex:
        print(ex)
        return {"success": False}