import React, { useState } from 'react'
import { addShopping } from '../App/ShoppingSlice';
import { useDispatch } from 'react-redux';

export default function ShoppingForm() {

    const dispatch = useDispatch()
    const[shoppingItem, setShoppingItem] = useState('');
    const [quality, setQuality] = useState('')
    const [description, setDescription] = useState('')
   
    const handleAddShopping = () => {
        let shopping = {
            shoppingItem: shoppingItem,
            quality: quality,
            description: description
        }
        dispatch(addShopping(shopping))
        setShoppingItem('')
        setQuality('')
        setDescription('')
        // console.log(shopping)
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
             onChange={(e) => setQuality(e.target.value)}
        />

      <input type='text'
             placeholder='Discription'
             onChange={(e) => setDescription(e.target.value)}
        />

      <button onClick={handleAddShopping}>Add</button>

      </form>
    </>
  )
}

