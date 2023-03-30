import React from "react";

const ItemBudget = ({ budget, setBudget, handleCalculateBudget }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: "#A020F0", marginTop: "1rem" }}
        onClick={handleCalculateBudget}
      >
        Calculate Remaining Budget
      </button>
      <h2>Budget: {budget}din</h2>
      <label htmlFor="budget">Budget: </label>
      <input
        placeholder="Place your budget here"
        type="number"
        id="budget"
        name="budget"
        onChange={(event) => setBudget(event.target.value)}
      />
    </div>
  );
};

export default ItemBudget;
