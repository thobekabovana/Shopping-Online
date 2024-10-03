import React, { useState } from 'react'
import { addShopping } from '../App/ShoppingSlice';
import { useDispatch } from 'react-redux';

export default function ShoppingForm() {

    const dispatch = useDispatch()
    const[shoppingItem, setShoppingItem] = useState('');
    const [qality, setQality] = useState('')
    const [discription, setDiscription] = useState('')
   
    const handleAddShopping = () => {
        let shopping = {
            shoppingItem: shoppingItem,
            qality : qality,
            discription: discription
           }
       dispatch(addShopping(shopping))
       setShoppingItem('')
       console.log(shoppingItem, qality, discription)
    }

  return (
    <>
        <h1>Write Your Shopping List</h1>

      <form>
         
      <input type='text'
             placeholder='Name of the Cloth'
             onChange={(e) => setShoppingItem(e.target.value)}
        />

      <input type='text'
             placeholder='Qality'
             onChange={(e) => setQality(e.target.value)}
        />

      <input type='text'
             placeholder='Discription'
             onChange={(e) => setDiscription(e.target.value)}
        />

      <button onClick={handleAddShopping}>Add</button>

      </form>
    </>
  )
}
