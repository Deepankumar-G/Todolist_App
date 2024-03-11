import React from "react"

import { LineItems } from "./LineItems";

export const ItemsList = ({items,handleCheck,handledelete}) => {
  return (
        <ul>
                      {items.map((item) => (
                        <LineItems
                          item={item}
                          key={item.id}
                          handleCheck={handleCheck}
                          handledelete={handledelete}
                        />
                      ))}
         </ul>
  )
}
