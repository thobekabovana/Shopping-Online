import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteShopping } from '../App/ShoppingSlice';
import { Link } from 'react-router-dom';

function ShoppingList() {
  const dispatch = useDispatch();
  const { shoppings } = useSelector((state) => state.shopping);

  const handleDelete = (id) => {
    dispatch(deleteShopping(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateShopping(id));
  }

//   const handleUpdate = (id) => {
//     history.push(`/update/${id}`); // Navigate to the update form route
//   };

  return (
    <div>
        <h3>Shopping List</h3>
      <ul>
        {shoppings.map((item) => (
          <li key={item.id}>
             <span>{item.shoppingItem}</span>
            <span>{item.quality}</span>
            <span>{item.description}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleUpdate(item.id)}><Link to="/log-in">Update</Link></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;









