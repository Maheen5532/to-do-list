import { useState } from 'react'

function App() {
  const [task, setTask] = useState('')  // State to store the current task input
  const [tasks, setTasks] = useState([])  // State to store all tasks in the list

  const handleInputChange = (e) => {
    setTask(e.target.value)  // Update the task state when input changes
  }

  const handleAddTask = () => {
    if (task) {  // Only add if task is not empty
      setTasks([...tasks, task])  // Add the new task to the list
      setTask('')  // Clear the input field after adding
    }
  }

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)  // Remove task by index
    setTasks(updatedTasks)
  }

  return (
    <div className="flex justify-center items-center  h-screen bg-teal-100 p-4">
     <div className='flex justify-center items-center bg-white p-8 rounded flex-col '>
     <h1 className="text-3xl mb-4">To-Do List</h1>

<div className="flex mb-4">
  <input
    type="text"
    value={task}
    onChange={handleInputChange}
    placeholder="Enter a new task"
    className="p-2 border border-gray-300 rounded mr-2 lg:w-96"
  />
  <button
    onClick={handleAddTask}
    className="p-2 bg-teal-600 text-white rounded"
  >
    Add Task
  </button>
</div>

<ul className="list-none">
  {tasks.map((task, index) => (
    <li key={index} className="flex justify-between items-center  w-60 p-2 mb-2 bg-teal-600 text-white lg:w-96 border border-gray-300 rounded">
      <span>{task}</span>
      <button
        onClick={() => handleRemoveTask(index)}
        className="text-red-600"
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
    </li>
  ))}
</ul>
     </div>
    </div>
  )
}

export default App
