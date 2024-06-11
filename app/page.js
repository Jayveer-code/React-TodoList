"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8" style={{ backgroundImage: "url('/Todo.png')" }}>
      <h1 className=' text-black p-5 font-bold text-center rounded mb-8 w-full max-w-xl '  style={{ backgroundImage: "url('/bg2.png')", backgroundSize: "cover", backgroundPosition: "center" }}   > My Todo List</h1>
      <form 
        onSubmit={submitHandler} 
        className='flex flex-col items-center bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-lg w-full max-w-xl' 
        style={{ backgroundImage: "url('/bg2.png')" }}
      >
<input 
  type='text' 
  className='border-2 border-gray-300 mb-4 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-75 placeholder-gray-900 font-bold' 
  placeholder='Enter Your Task' required
  value={title}
  onChange={(e) => { setTitle(e.target.value); }}
/>

        <input 
          type='text' 
           className='border-2 border-gray-300 mb-4 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-75 placeholder-gray-900 font-bold'
          placeholder='Enter Your Description' required
          value={desc}
          onChange={(e) => { setDesc(e.target.value); }}
        />
<button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded hover:from-blue-500 hover:to-blue-1000 transition-colors w-full">
  Add Task
</button>
      </form >
      <hr className="my-8 w-full max-w-xl" />
      <div className='p-8 bg-slate-300 w-full max-w-xl rounded-lg shadow-lg'  style={{ backgroundImage: "url('/bg2.png')" }}>
        {mainTask.length === 0 ? (
          <h2 className="text-center">No Task Available</h2>
        ) : (
          <div className="overflow-x-auto" >
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg" >
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/12 px-4 py-2 text-left">#</th>
                  <th className="w-5/12 px-4 py-2 text-left" >Title</th>
                  <th className="w-5/12 px-4 py-2 text-left">Description</th>
                  <th className="w-1/12 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mainTask.map((t, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2" >{i + 1}</td>
                    <td className="px-4 py-2">{t.title}</td>
                    <td className="px-4 py-2">{t.desc}</td>
                    <td className="px-4 py-2">
                      <button 
                        onClick={() => deleteHandler(i)} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
