import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const Todo_items = ({text, update, deleteInfo}) => {
    return (
        <div className="todoitems">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className='icon' onClick={update} />
                <AiFillDelete className='icon' onClick={deleteInfo} />
            </div>
        </div>
    )
}

export default Todo_items