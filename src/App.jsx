import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask);
    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
    
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-col p-10 lg:w-1/2 gap-4 items-start'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
          <input className='px-5 outline-none font-medium w-full py-2 border-3 rounded ' type="text" placeholder='Enter Notes heading' value={title} onChange={(e)=>{setTitle(e.target.value);}}/>
          <textarea className='px-5 w-full font-medium outline-none h-30 py-2 border-3 rounded ' type="text" placeholder='Write Details' value={details} onChange={(e)=>{setDetails(e.target.value)}}/>
          <button className='bg-white font-medium outline-none w-full text-black px-5 py-2 rounded'>Add Notes</button>

      </form>

      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>        
        <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto '>
            {task.map(function(elem, idx){
              return  <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 text-black rounded-2xl px-4 py-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-xl text-center font-bold'>{elem.title}</h3>
                  <p className='mt-4 leading-tight text-xs font-semibold text-gray-600 max-h-28 overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden break-words '>{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default App
