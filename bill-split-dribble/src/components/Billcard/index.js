import React from 'react'
import './styles.scss'
import add from '../../assets/images/add.png'
import minus from '../../assets/images/minus.png'

function Billcard({img, name, price, quantity, total}) {
    return (
        <div className='billcard'>
          <img className="billcard__img" src={img} alt="Selected food image" />
          <div className="billcard__info">
            <p className='info__name'>{name}</p>
            <p className='info__price'>{price}</p>
          </div>
          <div className="billcard__quantity">
            <button className='quantity__icon'>-</button>
            <p>x{quantity}</p>
            <button className='quantity__icon'>+</button>
          </div>
          <p className="billcard__total">{total}</p>
        </div>
    )
}

export default Billcard
