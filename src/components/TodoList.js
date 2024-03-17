import React from 'react'

export const TodoList= (props) => {
  return (
    <li className='list-item'>
      {props.item}
      <span className='icons'>
        <i className='icon-delete'onClick={e=>{
          props.deleteItem(props.index)
        }}>DEL</i>
      </span>
    </li>
  )
}
