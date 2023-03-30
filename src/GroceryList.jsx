import React, { useState, useEffect } from "react";
import ItemBudget from "./components/ItemBudget";
import ItemForm from "./components/itemForm";
import ItemList from "./components/ItemList";

const GroceryList = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("groceryItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [budget, setBudget] = useState(() => {
    const storedBudget = localStorage.getItem("groceryBudget");
    return storedBudget ? JSON.parse(storedBudget) : 0;
  });

  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(items));
    localStorage.setItem("groceryBudget", JSON.stringify(budget));
  }, [items, budget]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const itemName = event.target.elements.itemName.value;
    const itemQuantity = event.target.elements.itemQuantity.value || 1;
    const itemPrice = event.target.elements.itemPrice.value;
    if (itemName.trim() === "") {
      alert("Please enter a valid item name");
      return;
    }
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    event.target.reset();
  };

  /* This function "handleAddItem" is used to capture input values, and submit them. I also did some additional checks, like alert for empty value */

  const handleEditItem = (index) => {
    const newName = prompt("Enter new name for item:");
    const newQuantity = prompt(
      "Enter new quantity for item:",
      items[index].quantity
    );
    const newPrice = prompt("Enter new price for item:", items[index].price);
    if (newName.trim() === "") {
      alert("Please enter a valid item name");
      return;
    }
    const updatedItem = {
      ...items[index],
      name: newName,
      quantity: newQuantity,
      price: newPrice,
    };
    setItems((prevItems) => [
      ...prevItems.slice(0, index),
      updatedItem,
      ...prevItems.slice(index + 1),
    ]);
  };

  /* This function "handleEditItem" is used to edit the values */

  const handleDeleteItem = (index) => {
    setItems((prevItems) => [
      ...prevItems.slice(0, index),
      ...prevItems.slice(index + 1),
    ]);
  };

  /* This function "handleDeleteItem" is used to delete the values */

  const handleClearAll = () => {
    setItems([]);
  };

  /* This function "handleClearAll" is used to reset the grocery list */

  const handleCalculateBudget = () => {
    const totalCost = items.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const remainingBudget = budget - totalCost;
    if (remainingBudget >= 0) {
      alert(
        `You have ${remainingBudget.toFixed(2)} dinara left in your budget.`
      );
    } else {
      alert(
        `You need to add ${(remainingBudget * -1).toFixed(
          2
        )} dinara to your budget.`
      );
    }
  };

  /* This function "handleCalculateBudget" is used to calculate the difference between the budget and total cost (do I have enough money, or i would need more) */

  return (
    <div className="container">
      <h1>Grocery list:</h1>
      <ItemForm handleAddItem={handleAddItem} />

      <ItemList
        items={items}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
      />

      <button onClick={handleClearAll}>Clear All</button>

      <ItemBudget
        budget={budget}
        setBudget={setBudget}
        handleCalculateBudget={handleCalculateBudget}
      />
    </div>
  );
};

export default GroceryList;
