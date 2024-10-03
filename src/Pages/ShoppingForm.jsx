import React from 'react'

export default function ShoppingForm() {

    const handleAddShopping = () => {

    }

  return (
    <>
        <h1>Write Your Shopping List</h1>

      <form>
         
      <input type='text'
             placeholder='Name of the Cloth'
            //  onChange={(e) => setExpenseItem(e.target.value)}
        />

      <input type='text'
             placeholder='Qality'
            //  onChange={(e) => setAmount(e.target.value)}
        />

      <input type='text'
             placeholder='Discription'
            //  onChange={(e) => setAmount(e.target.value)}
        />

      <button onClick={handleAddShopping}>Add</button>

      </form>
    </>
  )
}
