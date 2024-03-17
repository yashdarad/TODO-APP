import react ,{useState}from 'react';

function TodoForm(props){
    const[inputText,setInputText]=useState('');
    
    return (
        <div className='input-container'>
            <input type='text' 
                value={inputText}
                className='input-box-todo'
                placeholder='Enter your tasks' 
                onChange={e=>{setInputText(e.target.value)
             }}/>
            <button className="add-btn" 
                    onClick={()=>{
                        props.addList(inputText)
                        setInputText("")
                    }}>+</button>    
        </div>
    )
}
export default TodoForm;