const Task = ({ data, taskDone }) => (
    <div className="task">
        <span className={data.priority ? 'title priority' : 'title'}>{data.title}</span>
        <span className="date">{data.date}</span>
        {data.active ? <button onClick={() => taskDone(data.id)}>ZROBIONE</button> : false}
    </div>
)

export default Task