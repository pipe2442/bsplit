import React, { useState } from 'react'
import './styles.scss'
import { addValues, findTax, equalDivision, usersPercentage } from '../../logic/logic.js'

function Bill ({ bill }) {

  const total = addValues(bill)
  const tax = findTax(bill, total)
  const final = total + tax
  const equalParts = equalDivision(total, tax, bill)
  const [users, setUsers] = useState([...usersPercentage(bill.users)])
  const [perusers, setPerusers] = useState([])

  console.warn('usuarios', users)

  const handleChangeInput = (index, event) => {
    const values = [...users]
    values[index][event.target.name] = event.target.value 
    setUsers(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPerusers([...users])
    setUsers([])
  }

  return (
    <div className='bill'>
      <h1 className='bill__title'>Restaurant Bill</h1>
      {
          perusers.map(u => (
            <div>
              <h2>{u.name}</h2>
              <h2>{u.percentage}</h2>
            </div>
          ))
      }
      <ul className='bill__menu'>
        {bill.menu.map((menu, idx) => (
          <li className='bill__item' key={idx}>
            <div className='item-container'>
              <img className='item__image' src={menu.image} alt='image' />
              <h3>{menu.name}</h3>
            </div>
            <h3 className='item__price'>${menu.value}</h3>
          </li>
        ))}
      </ul>
      <div className='values-container'>
        <div className='bill__values'>
          <h3>Tax</h3>
          <h3>Total</h3>
          <h3>Final</h3>
        </div>
        <div className='bill__values'>
          <h3>${tax}</h3>
          <h3>${total}</h3>
          <h3>${total + tax}</h3>
        </div>
      </div>
      {bill.category === 'B' && (
        <form className='bill__percentage' onSubmit={handleSubmit}>
          <h2>Percentages:</h2>
          <h3>
            On this section you should add the percentage that each user wish to
            pay.
          </h3>
          <ul>
            {users.map((user, idx) => (
              <li className='percentage__item' key={idx}>
                <h3>Percentage for {user.name}</h3>
                <input
                  type='text'
                  placeholder='Add Percentage'
                  className='percentage__input'
                  onChange={event => handleChangeInput(idx, event)}
                  name='percentage'
                />
                <h4>{user.name} pays {((user.percentage/100) * final).toFixed(0)}</h4>
              </li>
            ))}
          </ul>
          <button onClick={handleSubmit} type='submit' className='button'>
            Add Percentage
          </button>
        </form>
      )}
      {bill.category === 'A' && (
        <div>
          <h2>Equal parts:</h2>
          <h3>each user pays {equalParts}</h3>
        </div>
      )}
    </div>
  )
}

export default Bill
