import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <label htmlFor='addItem' style={{ marginRight: '10px' }}>Add Item:</label>
      <input 
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newItem}  // Controlled input
        onChange={(e) => setNewItem(e.target.value)}  // Update state
        style={{ marginRight: '10px' }}
      />
      <button type='submit' aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
