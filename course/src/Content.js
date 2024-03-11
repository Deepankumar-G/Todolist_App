import React from "react";


import { ItemsList } from "./ItemsList";

const Content = ({items,handleCheck,handledelete}) => {


    
    return (
        <>
            {(items.length)?(
               <ItemsList 
               items={items}
               handleCheck={handleCheck}
               handledelete={handledelete}
               />
            ):(
                <p>Your List is Empty</p>
            )}
        </>
    )
}

export default Content