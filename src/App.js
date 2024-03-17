import logo from './logo.svg';
import './App.css';
import  TodoForm from './components/TodoForm';
import  {TodoList} from './components/TodoList';
import { useState } from 'react';
function App() {

  const [listTodo,setListTodo]=useState([]);
  //list k liye
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  //delete k liye
  const deleteListItem=(key)=>{
    let tmp=[...listTodo];
    tmp.splice(key,1);
    setListTodo([...tmp])
  }
  return (
    
    <div className="main-container">
      <div className='center-container'>
        <TodoForm addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
              <TodoList key={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  );
}
 
export default App;
