import React from "react";

const ItemList = ({ items, handleEditItem, handleDeleteItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <span>{item.name}</span>
          <span>Quantity: {item.quantity}</span>
          <span>Price: {item.price} dinara</span>
          <button
            style={{ backgroundColor: "limegreen" }}
            onClick={() => handleEditItem(index)}
          >
            Edit
          </button>
          <button
            style={{ backgroundColor: "#c70000" }}
            onClick={() => handleDeleteItem(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
