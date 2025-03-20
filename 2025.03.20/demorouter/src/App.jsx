import { Routes, Route, Link } from 'react-router'
import './App.css'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { Product } from './components/Product'
import { NoMatch } from './components/NoMatch'
import { Users, User } from './components/Users'
import { DemoHook } from './components/Demo'
function App() {
  let dataUser = [
    {id: 1, fullName: 'Mr Tèo'},
    {id: 2, fullName: 'Lê Li La'}
  ]
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/product">Product</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/users">USER LIST</Link> |
        <Link to="/hooks">HOOKS</Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/products' element={<Product /> } />
          <Route path='/profile' element={<Profile /> } />
          <Route path='/hooks' element={<DemoHook /> } />
          <Route path='/users' element={<Users users={dataUser} />} />
          <Route path='/users/:userId' element={<User />} />
          <Route path='*' element={<NoMatch /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
