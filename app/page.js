"use client"
import React, { useState } from 'react';

const page = () => {

 const [title, settitle] = useState("")
 const [desc, setdesc] = useState("")

 const [mainTask, setmainTask] = useState([])
 const submitHandler =(e)=>{
  e.preventDefault();
  setmainTask([...mainTask,{title,desc}]);
  settitle("");
  setdesc("");
 }

 const deleteHandler=(i)=>{
  let copyTask=[...mainTask]
  copyTask.splice(i,1)
  setmainTask(copyTask)

 }
 let renderTask = <h2>No Task Avalible </h2> 

if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return<li key={i} className='flex item-center justify-between mb-8'> 
    <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-medium'>{t.desc}</h6>
      <button onClick={ ()=>{deleteHandler(i)}} className="bg-red-400 text-white border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors rounded">
  Delete Task
</button>
    </div>
    </li> 
 })
}
  return (
   
   <div>
      <h1 className='bg-black text-white p-5 font-bold text-center'>My Todo List </h1>
      <form onSubmit={submitHandler}>
      <input type='text' className='border-4 border-black mb-4 m-8 px-4 py-2' placeholder='Enter Your Task' 
      value={title}
      onChange={(e)=>{
      settitle(e.target.value);
      }}/>
      <input type='text' className='border-4 border-black mb-4 m-8 px-4 py-2' placeholder='Enter Your Description'
      value={desc}
      onChange={(e)=>{
      setdesc(e.target.value);
      }}/>
      <button className="bg-white text-black border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors rounded">
  Add Task
</button>

      </form>

      <hr/>
      <div className='p-8 bg-slate-300'>
      <ul>{renderTask}</ul>
      </div>
      </div>
  );
};

export default page;
