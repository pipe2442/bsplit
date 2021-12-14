import { useState } from 'react'
import './assets/app.scss'
import Category from "./components/Category"
import Menu from "./components/Menu"
import Bill from "./components/Bill"
import {menu} from './components/mockup'

function App () {
  const [order, setOrder] = useState([])

  const handleMenuChange = (newDish, idx, add = true) => {
    let newArr = order.filter(element => element  !== newDish)
    add ? newDish.quantity += 1  : newDish.quantity -= 1 
    newArr.splice( idx, 0, newDish );
    setOrder([...newArr])
  }

  return (
    <>
      <div className="app">
        <div className="app__menu">
          <Category />
          <Menu menu={menu} handleMenuChange={handleMenuChange} />
        </div>
        <Bill className="app__bill" food={order} handleMenuChange={handleMenuChange} />
      </div>
    </>
  )
}

export default App
