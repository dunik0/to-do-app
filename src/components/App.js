import { Component } from 'react';
import './App.css';
import NewTaskForm from './NewTaskForm'
import List from './List';

class App extends Component {

  state = {
    tasks: [],
  }

  addNewTask = (e) => {
    e.preventDefault()
    if (e.target.children.title.value) {
      const tasks = [...this.state.tasks]
      const formChildren = e.target.children
      const newTask = {
        title: formChildren.title.value,
        date: formChildren.dateLabel.lastChild.value,
        priority: formChildren.priorityLabel.firstChild.checked,
        active: true,
        id: new Date().getTime()
      }
      tasks.push(newTask)
      this.setState({ tasks })
    }
  }

  taskDone = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks[index].active = false
    this.setState({ tasks })
  }

  render() {
    const { tasks } = this.state
    const activeTasks = tasks.filter(task => task.active)
    const taskHistory = tasks.filter(task => !task.active)
    return (
      <>
        <NewTaskForm addNewTask={this.addNewTask} />
        <List tasks={activeTasks} taskDone={this.taskDone} current={true} />
        <List tasks={taskHistory} current={false} />
      </>
    );
  }

}

export default App;
