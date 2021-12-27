import React from 'react'
import './styles.scss'

function Option({ image, text }) {
    return (
        <>
          <div className='option'>
            <div className="img-container">
              <img className='option__image' src={image} alt="hot" />
            </div>
            <p className='option__text'>{text}</p>
          </div>
        </>
    )
}

export default Option
