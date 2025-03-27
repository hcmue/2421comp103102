# FastAPI

`https://fastapi.tiangolo.com/`

## 1. Tạo và làm việc trên môi trường ảo (virtual environment)

    - a. Tạo môi trường ảo trong thư mục venv

        `$ python -m venv venv`

    - b. [option] Di chuyển vào thư mục project

     `$ cd proj`

    - c. Active môi trường ảo

        `$ venv\Scripts\activate`

    - d. Deactivate: `$ deactivate`
    - e. Export packages đã dùng trong project

        `pip freeze > requirements.txt`

    - f. Dựng lại môi trường

        - Tạo môi trường ảo (chú ý version python mà proj yêu cầu)
        - Activate môi trường ảo
        - Dựng lại packages:
            `pip install -r requirements.txt`

## 2. Cài thư viện FastAPI

`pip install "fastapi[standard]"`

# 3. Tạo ứng dụng fastAPI.

    - Tạo project, giả sử tên `main.py`
    - Giả sử file chính là main.py

        `fastapi dev main.py`
