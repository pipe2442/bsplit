import React from 'react'
import './styles.scss'
import Billcard from '../Billcard'

function Bill() {
    return (
        <>
          <div className='bill'>
            <h4 className='category__text order__text'>
              <span className='category__bold'>Choose</span> Order
            </h4>
            <div className="bill__menu">
              <Billcard img='https://i.ibb.co/vZk4rNp/bigmac.png' name='Big Mac' price='5.99' quantity={2} total={11.98} />
              <Billcard img='https://i.ibb.co/vZk4rNp/bigmac.png' name='Big Mac' price='5.99' quantity={2} total={11.98} />
              <Billcard img='https://i.ibb.co/vZk4rNp/bigmac.png' name='Big Mac' price='5.99' quantity={2} total={11.98} />
              <Billcard img='https://i.ibb.co/vZk4rNp/bigmac.png' name='Big Mac' price='5.99' quantity={2} total={11.98} />
            </div>
          </div>
        </>
    )
}

export default Bill
