import { useState } from "react";

const ItemAddForm = ({ onAdded }) => {
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdded(newItem);
    setNewItem("");
  };

  return (
    <form className="item-add-form d-flex flex-column" onSubmit={handleSubmit}>
      <input
        type="text"
        name="new-item"
        className="form-control mb-3"
        placeholder="Enter new item (max 50 symbols)"
        maxLength={50}
        onChange={handleInputChange}
        value={newItem}
      />
      <button
        className="btn btn-warning mx-auto"
        disabled={newItem.length === 0}
      >
        Add Item
      </button>
    </form>
  );
};
export default ItemAddForm;
