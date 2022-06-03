import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
    }


  return (
    <div className="container">
      <Header title = 'Task tracker'/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
