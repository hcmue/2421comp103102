from typing import Union
from fastapi import FastAPI
import json

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

STUDENT_DATA = "students.json"
def read_student_data():
    try:
        with open(STUDENT_DATA, encoding="utf8") as myfile:
            return json.load(myfile)
    except Exception as ex:
        print(ex)
        return []
    
@app.get("/students")
def get_students():
    return read_student_data()

@app.get("/students/{id}")
def get_student(id: int):
    pass

from pydantic import BaseModel
class Student(BaseModel):
    id: int
    name: str
    gpa: float

@app.post("/students")
def add_student(model: Student):
    pass

@app.put("/students/{id}")
def update_student(id: int):
    pass

@app.delete("/students/{id}")
def delete_student(id: int):
    pass