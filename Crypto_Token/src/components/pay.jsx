import React from 'react';

export default function Pay() {
  return (
    <div className='pay content'>
      <h2>Transfer to other account: </h2>
      <div className='account'>
        <div className='box'>
          <p>Account: </p>
          <input type="text" />
        </div>
        <div className='box'>
          <p>Amount: </p>
          <input type="number" />
        </div>
      </div>
      <button>Transfer</button>
    </div>
  )
}
