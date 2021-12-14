import React from 'react'
import './styles.scss'
import Billcard from '../Billcard'
import { addValues, findTax, finalSum, usersPercentage } from '../../logic/logic.js'

function Bill({ food, handleMenuChange }) {
  const total = addValues(food)
  const tip = 10
  const tax = findTax(tip, total)
  const final = finalSum(total, tax)
    return (
        <>
          <div className='bill'>
            <h4 className='category__text order__text'>
              <span className='category__bold'>Order</span> Menu
            </h4>

            <div className="bill__menu">
              { 
                food.map((dish, idx) => (
                  dish.quantity > 0 &&
                  <Billcard dish={dish} handleMenuChange={handleMenuChange} idx={idx} />
                ))
              }
            </div>

            <div className="bill__results">
              <div className="results__name">
                <p>Sub total:</p>
                <p>PB({tip}%):</p> 
              </div>
              <div className="results__amount">
                <p>${total}</p>
                <p>${tax}</p>
              </div>
            </div>

            <button className='bill__submit' > Charge ${final}</button>
          </div>
        </>
    )
}

export default Bill
