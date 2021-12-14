import React from 'react'
import './styles.scss'
import Billcard from '../Billcard'

function Bill({ food, handleMenuChange }) {
    return (
        <>
          <div className='bill'>
            <h4 className='category__text order__text'>
              <span className='category__bold'>Order</span> Menu
            </h4>

            <div className="bill__menu">
              { 
                food.map(dish => (
                  dish.quantity > 0 &&
                  <Billcard dish={dish} handleMenuChange={handleMenuChange} />
                ))
              }
            </div>

            <div className="bill__results">
              <div className="results__name">
                <p>Sub total:</p>
                <p>PB(5%):</p> 
              </div>
              <div className="results__amount">
                <p>$22.40</p>
                <p>$22.40</p>
              </div>
            </div>

            <button className='bill__submit' > Charge $23.52</button>
          </div>
        </>
    )
}

export default Bill
