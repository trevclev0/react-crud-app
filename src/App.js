import { useState, useEffect } from 'react';
import './App.css';
import CommandPanel from './CommandPanel';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [showTaskList, setShowTaskList] = useState(true);

  useEffect((a) => {
    console.log(a, 'component mounted/updated');

    return () => {
      console.log('component unmounted');
    };
  }, [newTaskName]);

  const handleChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const taskId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
    const newTask = { id: taskId, name: newTaskName, isComplete: false };
    setTasks([...tasks, newTask]);
    setNewTaskName('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => taskId !== task.id));
  };

  const toggleCompletion = (taskId) => {
    setTasks(tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    }));
  };

  return (
    <div className="App">
      <CommandPanel changeHandler={handleChange} submitHandler={addTask} currTask={newTaskName} />
      <button type="button" onClick={() => setShowTaskList(!showTaskList)}>Show Task List</button>
      {showTaskList
        && <TaskList tasks={tasks} editHandler={toggleCompletion} deleteHandler={deleteTask} />}
    </div>
  );
}

export default App;
