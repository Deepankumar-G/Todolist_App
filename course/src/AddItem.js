import React from "react"
import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

export const AddItem = ({newItem,setNewItem,handleSubmit}) => {

    const inputref=useRef();

    const focusChange = () => {
        inputref.current.focus();
      };

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputref}
                id="addItem"
                type="text"
                required
                placeholder="Add item"
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}

            />
            <button type="submit" aria-label="Add Item"
             onClick={focusChange} >
                <FaPlus />

            </button>


        </form>
    )
}
