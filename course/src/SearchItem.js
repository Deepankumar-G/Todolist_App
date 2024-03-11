import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
     <label>SearchItems</label>
     <input
        type='text'
        id='search'
        placeholder='searchbox'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}


     />


    </form>
  )
}

export default SearchItem
