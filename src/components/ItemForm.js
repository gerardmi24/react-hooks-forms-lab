import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function changeName(e) {
    setName(e.target.value)
  }

  function changeCat(e) {
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: name,
      category: category
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem" >
      <label>
        Name:
        <input type="text" value={name} onChange={changeName} name="name" />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={changeCat} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
