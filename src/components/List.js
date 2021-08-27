import Task from './Task'

const List = (props) => {

    const list = props.tasks.map(task => {
        if (task.active) {
            return <Task key={task.id} data={task} taskDone={props.taskDone} />
        } else {
            return <Task key={task.id} data={task} />
        }
    })



    return (
        <div id="ToDoList">
            <h1>{props.current ? 'Zadania do zrobienia' : 'Wykonane zadania'}</h1>
            {list}
        </div>
    )
}

export default List