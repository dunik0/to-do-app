const NewTaskForm = ({ addNewTask }) => (
    <form onSubmit={(e) => addNewTask(e)}>
        <input type="text" name="title" placeholder="Dodaj zadanie" />

        <label htmlFor="date" name="dateLabel">
            Do kiedy zrobić:
            <input type="date" name="date" id="date" />
        </label>

        <label htmlFor="priority" name="priorityLabel">
            <input type="checkbox" name="priority" id="priority" />
            Priorytet
        </label>

        <input type="submit" value="DODAJ" />
    </form>
)

export default NewTaskForm