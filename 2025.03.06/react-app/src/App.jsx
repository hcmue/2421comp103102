import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SinhVien, Student } from './components/SinhVien'
import { BangCuuChuong } from './components/BangCuuChuong'
import { ProductList } from './components/ProductDemo'

function App() {
  const [count, setCount] = useState(0)
  const [menu, setMenu] = useState(1);
  return (
    <>
      <div>
        <a onClick={() => setMenu(1)}>Home</a> | 
        <a onClick={() => setMenu(2)}>Profile</a> | 
        <a onClick={() => setMenu(3)}>Student</a> | 
        <a onClick={() => setMenu(4)}>Bảng cửu chương</a> 
      </div>
      <div>Đang chọn MENU: {menu}</div>
      {(menu == 3) && <SinhVien />}
      {(menu == 4) ? <BangCuuChuong /> : <Student id="1" name="test" gpa="4" />}
      
      <ProductList />
      <SinhVien />
      <Student id="49104004" name="Lý Tèo" gpa="3.5" />
      <Student id="49104404" name="Lý Long" gpa="3.9" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(count-1)}>-</button>
        <div>COUNT: {count}</div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
