import { useEffect, useState } from "react";
import Todo_items from "./components/Todo_items";
import { addItems, getAllItems, updateItems, deleteItems } from "./utilities/HandleCalls";

function App() {

  // component states to handle to-do list functionality
  const[items, setItems] = useState([])
  const[text, setText] = useState("")
  const[updates, setUpdates] = useState(false)
  const[id, setId] = useState("")

  useEffect(() => {
    getAllItems(setItems)
  }, [])

  const update = (_id, text) => {
    setUpdates(true)
    setText(text)
    setId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>--- Bryan's To-Do List ---</h1>
        <div className="input">
          <input type="text" placeholder="Add new item" value={text} onChange={(e) => setText(e.target.value)}/>
          <div className="put" onClick={ updates ? () => updateItems(id, text, setItems, setText, setUpdates) : () => addItems(text, setText, setItems)}>+</div>
        </div>
        <div className="list">
          {items.map((item) => <Todo_items key={item.id} text={item.text} update={() => update(item._id, item.text)} deleteInfo = {() => deleteItems(item._id, setItems)}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
