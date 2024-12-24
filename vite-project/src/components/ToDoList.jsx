import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, onDelete, onComplete, onEdit }) {
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
