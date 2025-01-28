import React,{useState} from 'react'

function Todolist() {
    const [tasks,setTasks] =useState([]);
    const [newtask,setNewtask] =useState();
    function handelinputchamnge(event){
        setNewtask(event.target.value);
    }
    function addtask() {
        if (newtask && newtask.trim() !== "") {
            setTasks(t => [...t, newtask]);
            setNewtask("");
        }
    }

    function deletetask(index){
    const updateTask = tasks.filter((_,i)=> i !== index );
setTasks(updateTask);
    }

    function movetaskup(index){
        if(index > 0){
            const updateTaskS =[...tasks];
            [updateTaskS[index],updateTaskS[index-1]]=
            [updateTaskS[index -1],updateTaskS[index]];
setTasks(updateTaskS);
        }

    }
    
    function movetaskdown(index){
        if(index < tasks.length -1 ){
            const updateTaskS =[...tasks];
            [updateTaskS[index],updateTaskS[index + 1]]=
            [updateTaskS[index + 1],updateTaskS[index]];
setTasks(updateTaskS);
        }

    }

    
  return (
   <>
   <div className=" TO-DO-LIST">
    <h1>
        TO-DO-LIST
    </h1>
    <div>
        <input type="text" placeholder="ENTER A TASK...." 
        value={newtask}
        onChange={handelinputchamnge} />
        <button className="ADDBTN" 
        onClick={addtask}>Add</button>
   </div>
   
    <ol>
        {tasks.map((task,index)=> 
        <li key={index}>
            <span className="TEXT">{task}</span>
            <button className="DELETE" onClick={ ()=> deletetask(index)}>🗑 </button>
            <button className="move-button" onClick={ ()=> movetaskup(index)}>☝ </button>
            <button className="move-button" onClick={ ()=> movetaskdown(index)}>👇 </button>
            
            
            </li>
        )}
    </ol>
    
    </div>
  
   </>
  )
}

export default Todolist