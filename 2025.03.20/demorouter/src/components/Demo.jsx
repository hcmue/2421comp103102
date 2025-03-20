import { useEffect, useState } from "react"

export const DemoHook = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Mr Bean");
    useEffect(() => {
        console.log('Thay đổi state bất kỳ')
    });//gọi cho mọi thay đổi của state
    useEffect(()=> {
        console.log("Effect gọi lần đầu tiên")
    }, []);//gọi lần đầu
    useEffect(()=> {
        console.log("Effect gọi khi name thay đổi")
    }, [name]);//gọi gọi khi name thay đổi
    return (
        <div>
            <h2>HOOKS DEMO</h2>
            <h3>Hello {name}</h3>
            <h4>Counter: {count}</h4>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>
                <button type="button" onClick={() => setCount(count+1)}>+</button>
                <button type="button" onClick={() => setCount(count-1)}>-</button>
            </div>
        </div>
    )
}