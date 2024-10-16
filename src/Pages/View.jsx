import React, { useEffect, useState } from 'react'; 


import { useDispatch, useSelector } from 'react-redux';
import { fetchLists, deleteList } from '../App/shoppingListSlice'
import { Link } from 'react-router-dom';

// const categoryIcons = {

//   electronics: faLaptop,
//   clothing: faTshirt,
// };

const View = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.lists.lists);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteList(id));
  };

  const filteredItems = items.filter((item) =>
    item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!items.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Lists</h2>
      <input
        type="text"
        placeholder="Search lists..."
        className="mb-4 p-2 border border-gray-300 rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((list) => (
          <div key={list.id} className="shadow-lg rounded-lg p-4 bg-white">
            <h3 className="font-bold text-lg flex items-center">
             
              Category: {list.category.charAt(0).toUpperCase() + list.category.slice(1)}
            </h3>
            <p>Optional Note: {list.optionalNote}</p>

            <Link to={`/list/${list.id}`} className="mt-2 text-blue-500 hover:underline">
              View List
            </Link>
          </div>
        ))}
      </div>

      
      <Link
        to="/add"
        className="fixed bottom-100 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600"
      >
       
       
      </Link>
    </div>
  );
};

export default View;
