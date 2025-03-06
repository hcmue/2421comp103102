import { useEffect, useState } from "react"

export const ProductList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    }, []);

    return (
        <>
            {(data.length == 0) && <div>Đang load dữ liệu...</div>}
            {data.map((item) => (
                <div style={{ border: '1px dash blue', margin: 5}}>
                    <h2>{item.title}</h2>
                    <h3>{item.price}</h3>
                </div>
            ))}
        </>
    )
}