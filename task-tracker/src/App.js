import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'hi',
        day: 'feb 5th at 2 30 am',
        reminder: true
    },
    {
        id: 2,
        text: 'hi',
        day: 'feb 5th at 2 30 am',
        reminder: true
    },
    {
        id: 4,
        text: 'hi',
        day: 'feb 5th at 2 30 am',
        reminder: true
    }

    ]
  )

    const addTask = (task) => {
      // console.log(task)
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }




    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
    }


    // reminder

    const toggleReminder = (id) => {
        setTasks(
          tasks.map((task) =>
          task.id === id ? {...task, reminder:
          !task.reminder} : task
        )
      )
      // console.log(id)
    }  

  return (
    <div className="container">
      <Header title = 'Task tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      />) : ('No tasks to show')}
      
    </div>
  );
}

export default App;
