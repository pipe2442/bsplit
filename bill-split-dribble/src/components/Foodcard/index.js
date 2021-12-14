import React from 'react'
import './styles.scss'

function Foodcard({ dish }) {
  const {img, name, price} = dish
    return (
        <>
          <div className='card'>
            <img className='card__img' src={img} alt="Food Menu Image" />
            <h3 className='card__text'>{name}</h3>
            <p className='card__price'>${price}</p>
          </div>
        </>
    )
}

export default Foodcard
