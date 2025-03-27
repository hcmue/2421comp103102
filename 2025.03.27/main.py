from typing import Union
from fastapi import FastAPI
import json
from pydantic import BaseModel
from typing import Optional

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
def get_students(q: Optional[str] = None):
     if q is None:
        return read_student_data()
     else:
        return list(filter(lambda x: x["name"].find(q) > -1,
                             read_student_data()))  


@app.get("/students/{id}")
def get_student(id: int):
    data = read_student_data()
    for item in data:
        if item["id"] == id:
            print(item)
            return {
                "success": True, "data": item
            }
    return { "success": False, "message": f"Not found student {id}"}


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