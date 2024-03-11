import React from "react"
import { FaTrashAlt } from "react-icons/fa";

export const LineItems = ({item,handleCheck,handledelete}) => {
  return (
    <li className="item">
                        <input
                            type="checkbox"
                            onChange={()=>handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label 
                        style={(item.checked)? {textDecoration:'line-through'}:null}
                        onDoubleClick={()=>handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt
                        onClick={()=>handledelete(item.id)}
                           role= "button"
                           tabIndex="0"
                        />
                    </li>
  )
}
