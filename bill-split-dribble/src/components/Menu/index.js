import React from 'react'
import './styles.scss'
import Foodcard from '../Foodcard'

function Menu () {
  return (
    <>
        <h4 className='category__text order__text'>
          <span className='category__bold'>Choose</span> Order
        </h4>
        <section className='menu'>
          <Foodcard img='https://i.ibb.co/vZk4rNp/bigmac.png' name='Big Mac' price='5.99' />
          <Foodcard img='https://i.ibb.co/b50wYp8/bigmac-combo.png' name='Combo 1' price='10.99' />
          <Foodcard img='https://i.ibb.co/NxFyNg5/cheeseburger-combo.png' name='Combo 2' price='8.99' />
          <Foodcard img='https://i.ibb.co/BjYdk40/doublequarter-pounder.png' name='Double Quarter' price='7.99' />
          <Foodcard img='https://i.ibb.co/1JsTmY5/happymeal.png' name='Happy Meal' price='8.99' />
          <Foodcard img='https://i.ibb.co/tmv3Dcc/mcdouble.png' name='Mcdouble' price='4.99' />
          <Foodcard img='https://i.ibb.co/Rc0N0GB/mocha.png' name='Mocha' price='2.99' />
          <Foodcard img='https://i.ibb.co/ZVWXKN9/spicychickendeluxe.png' name='Spicy Chicken Deluxe' price='2.99' />
        </section>
    </>
  )
}

export default Menu
