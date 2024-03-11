
import { AddItem } from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";



function App() {
  const API_URL = "http://localhost:8000/items"
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setisLoading] = useState(true)


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw Error("data not received")
        const listItems = await res.json()
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      }
      finally {
        setisLoading(false)
      }
    } 
    setTimeout(() => {
      fetchItems()
    }, 2000)
  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }


    const result = await apiRequest(API_URL, postOptions)
    console.log(result)
    if (result) setFetchError(result)
  }

  const handleCheck = async (id) => {
    const checkItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(checkItems)


    const myItem = checkItems.filter((item) => item.id === id)
    console.log(myItem)

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const requrl = `${API_URL}/${id}`
    console.log(requrl)
    const result = await apiRequest(requrl, updateOptions)
    if (result) setFetchError(result)



  }
  const handledelete = async (id) => {
    const delItems = items.filter((item) =>
      item.id !== id)
    setItems(delItems)
    // localStorage.setItem("todo_list", JSON.stringify(listItems))
    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError(result)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {fetchError && <p>{`Error:data not received`}</p>}
        {isLoading && <p>Data is Loading..</p>}
        {!isLoading && !fetchError && <Content
          items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handledelete={handledelete}
        />}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  )

}

export default App;
