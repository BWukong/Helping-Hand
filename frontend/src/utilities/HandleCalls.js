import axios from 'axios'

const url = "http://localhost:5000"
const getAllItems = (setItems) => {
    axios.get(url).then(({data}) => {
        console.log('data', data);
        setItems(data)
    })
}

// text is the inputted text we want to add
const addItems = (text, setText, setItem) => {
    axios.post(`${url}/save`, {text}).then((data) => {
        console.log(data);
        setText("")
        getAllItems(setItem)
    }).catch((err) => console.log(err))
}

const updateItems = (id, text, setItem, setText, setUpdates) => {
    axios.post(`${url}/update`, {_id: id, text}).then((data) => {
        setText("")
        setUpdates(false)
        getAllItems(setItem)
    }).catch((err) => console.log(err))
}

const deleteItems = (_id, setItem) => {
    axios.post(`${url}/delete`, {_id}).then((data) => {
        getAllItems(setItem)
    }).catch((err) => console.log(err))
}

export {getAllItems, addItems, updateItems, deleteItems}