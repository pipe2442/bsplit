import React from 'react'
import './styles.scss'
import { dishTotal } from '../../logic/logic.js'

function Billcard({ dish, idx, handleMenuChange }) {
  const { img, name, price, quantity } = dish
  const total = dishTotal(price, quantity)
    return (
        <div className='billcard'>
          <img className="billcard__img" src={img} alt="Selected food image" />
          <div className="billcard__info">
            <p className='info__name'>{name}</p>
            <p className='info__price'>{price}</p>
          </div>
          <div className="billcard__quantity">
            <button onClick={() => handleMenuChange(dish, idx, false)} className='quantity__icon'>-</button>
            <p>x{quantity}</p>
            <button onClick={() => handleMenuChange(dish, idx)} className='quantity__icon'>+</button>
          </div>
          <p className="billcard__total">{total}</p>
        </div>
    )
}

export default Billcard
