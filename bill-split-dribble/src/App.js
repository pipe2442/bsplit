import { useState } from 'react'
import './assets/app.scss'
import Category from "./components/Category"
import Menu from "./components/Menu"
import Bill from "./components/Bill"
import useFetch from './customHooks/useFetch'

function App () {
  const [order, setOrder] = useState([])
  const handleMenuChange = (newDish, idx, add = true) => {
    let newArr = order.filter(element => element  !== newDish)
    add ? newDish.quantity += 1  : newDish.quantity -= 1 
    newArr.splice( idx, 0, newDish );
    setOrder([...newArr])
  }

  const {data: menu, error} = useFetch("http://localhost:8000/menu")

  return (
    <>
      <div className="app">
        <div className="app__menu">
          <Category />
          <Menu menu={menu} handleMenuChange={handleMenuChange} />
        </div>
        <Bill className="app__bill" order={order} handleMenuChange={handleMenuChange} />
      </div>
    </>
  )
}

export default App
