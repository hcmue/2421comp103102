Bài tập về làm:

- Thiết component để hiển thị sản phẩm lấy từ backend: https://fakestoreapi.com/products
- Sử dụng hàm fetch để lấy. Lấy xong lưu vô biến state

```
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
```
