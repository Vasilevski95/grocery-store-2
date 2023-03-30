import React from "react";

const ItemForm = ({ handleAddItem }) => {
  return (
    <div>
      <form onSubmit={handleAddItem}>
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" name="itemName" />
        <label htmlFor="itemQuantity">Quantity:</label>
        <input type="number" id="itemQuantity" name="itemQuantity" min="1" />
        <label htmlFor="itemPrice">Price:</label>
        <input
          type="number"
          id="itemPrice"
          name="itemPrice"
          min="0.01"
          step="0.01"
          required
        />
        <button style={{ backgroundColor: "#808000" }} type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
