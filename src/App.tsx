import React, { ChangeEvent, useState } from 'react';
import TodoTask from './components/TodoTask';
import './index.css';
import { ITask } from './Interfaces';
import Image from './assets/icon.png';


const App = () => {

  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [empty, setEmpty] = useState<string>('No task');
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const addTask = (): void => {

    if(task === ""){
      setErrorMessage('Please input a task');
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }else{
      setEmpty("");
      const newTask = {taskName: task};
      setTodo([...todo, newTask]);
      setTask("");
    }

  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">

      <div className="Header">
        <Heading title={'Todo App'} />
      </div>

      <div className="tbody">

        <div className="inputsection">
          <h3>Add Task: </h3>
          <div className="formgroup">
            <input type="text" placeholder="Task..." 
              className="input"
              value={task}
              onChange={handleChange}
            />
            <button type='button' className="btn" onClick={addTask}>Add</button>
          </div>
          {errorMessage && <small>{errorMessage}</small>}
        </div>

        <div className="todoListsection">
          {todo.length > 0 ? todo.slice().reverse().map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} completeTask={completeTask} />
          }) : <small>{empty}</small>}
        </div>

      </div>
    </div>
  );
}

const Heading = ({title}: {title: string}) => {
  return (
    <div className="title">
      <img src={Image} alt="icon"/>
      <h1>{title}</h1>
    </div>
  )
}
export default App;
