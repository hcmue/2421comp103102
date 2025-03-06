import { useState } from "react"

export const BangCuuChuong = () => {
    const [N, setN] = useState(7);
    return (
        <div style={{ margin: 10 }}>
            <h2>BẢNG CỬU CHƯƠNG {N}</h2>
            <input onChange={(e) => setN(e.target.value || 5)} />
            {
                [1,2,3,4,5,6,7,8,9,10].map(element => (
                    <div>{N} x {element} = {N*element}.</div>
                ))
            }
        </div>
    )
}