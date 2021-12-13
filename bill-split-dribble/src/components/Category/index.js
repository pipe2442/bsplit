import React from 'react'
import Option from '../Option';
import './styles.scss'
import search from '../../assets/images/loupe.png';
import fire from '../../assets/images/options/fire.png'
import burger from '../../assets/images/options/burger.png'
import pizza from '../../assets/images/options/pizza.png'
import snack from '../../assets/images/options/fries.png'
import soda from '../../assets/images/options/soda.png'
import coffee from '../../assets/images/options/coffee.png'
import icecream from '../../assets/images/options/icecream.png'

function Category() {
  return (
    <>
      <div className='category'>
        <h2 className='category__text'>
          <span className='category__bold'>Menu</span> Category
        </h2>
        <div className="category__search">
          <img fill='red' src={search} alt="glass" className='search__img' />
          <input className='search__bar' type="text" placeholder="Search for food, coffee, etc" />
        </div>
      </div>
      <div className="options">
          <Option image={fire} text='Hot'/>
          <Option image={burger} text='Burger'/>
          <Option image={pizza} text='Pizza'/>
          <Option image={snack} text='Snack'/>
          <Option image={soda} text='Soft Drink'/>
          <Option image={coffee} text='Coffeee'/>
          <Option image={icecream} text='Ice Cream'/>
      </div>
    </>
  )
}

export default Category
