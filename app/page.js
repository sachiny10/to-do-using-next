"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState('');
  const [des, setdes] = useState('');
  const [mainTask, setmainTask] = useState([])

  const submithandler = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask, { title, des }]);
    setdes("")
    settitle("")
  }
  const deletehand = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i , 1)
    setmainTask(copytask)
  }

  let task = <h2>No Task Available</h2>
  if(mainTask.length>0){
    task =   mainTask.map((t,i)=>{
      return <li key={i} className='flex items-center justify-between m-8'><div className='flex justify-between w-2/3'>
        <h4 className='text-xl'>{t.title}</h4>
        <p>{t.des}</p>
      </div>
      <button onClick={()=>{
        deletehand(i)
      }} className='bg-red-500 text-white px-4 py-2 rounded-lg'>Delete</button>
      </li>
    })
  }



  return (
    <>
      <h1 className='text-white bg-green-500 p-6  font-bold text-2xl text-center underline rounded-xl m-4'> My TO-DO List.</h1>
      <form onSubmit={submithandler}>
        <input value={title} type="text"className='border-white-800 m-5 border-2 px-4 py-2 ' placeholder='Enter Title here'
          onChange={(e)=>{
            settitle(e.target.value);
          }}
        />
        <input value={des}  type="text"className='border-white-800 m-5 border-2 px-4 py-2' placeholder='Enter Discription here' onChange={(e)=>{
          setdes(e.target.value)
        }}/>
        <button className='bg-black py-2 px-3 rounded-md text-white font-bold '>Add Task</button>
      </form>
      <div className="p-8 bg-slate-200 m-5 rounded-lg ">
      <ul>
        {task}
      </ul>
      </div>
    </>
  )
}

export default page;
