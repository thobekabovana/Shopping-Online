import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteShopping } from '../App/ShoppingSlice';
import { Link } from 'react-router-dom';

function ShoppingList() {
  const dispatch = useDispatch();
  const { shoppings } = useSelector((state) => state.shopping);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [shoppingItem, setShoppingItem] = useState('');
  const [quality, setQuality] = useState('');
  const [description, setDescription] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteShopping(id));
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setSelectedItem(item);
    setShoppingItem(item.shoppingItem);
    setQuality(item.quality);
    setDescription(item.description);
  };

  const handleUpdateShopping = () => {
    dispatch(updateShopping({ // Pass the updated values
      id: selectedItem.id,
      shoppingItem,
      quality,
      description,
    }));

    console.log('Updated values:', shoppingItem, quality, description);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

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
            <button onClick={() => handleEdit(item)}>Edit</button>
          </li>
        ))}
      </ul>
      {showForm && (
        <div>
          <form>
            <input
              type="text"
              placeholder="Name of the Cloth"
              value={shoppingItem}
              onChange={(e) => setShoppingItem(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quality"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={() => handleUpdateShopping(selectedItem.id)}>Update</button>
            <button onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default ShoppingList;