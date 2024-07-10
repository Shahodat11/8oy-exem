import React, { useState } from 'react'

let initialState = {
    fname:"",
    lname:"",
}
const Checkout = () => {
   let [data, setData] = useState(initialState)
    const handleSubmit = e => {
        e.preventDefault()
        console.log(data);
    }
  return (
    <div >
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} action="">
            <input value={data.fname} onChange={e => setData(p => ({...p, fname: e.target.value}))} type="text" placeholder='fname' />
            <input value={data.lname} onChange={e => setData(p => ({...p, lname: e.target.value}))} type="text" placeholder='lname' />
            <button>Buy now</button>
        </form>
    </div>
  )
}

export default Checkout