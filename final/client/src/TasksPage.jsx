function TasksPage({tasks, setTasks }) {

    const tasksOverall = tasks || [];

    async function deleteTasks(idDelete) {
    await fetch(`http://localhost:3000/api/items/${idDelete}`, {
     method: "DELETE"
      });

    setTasks(prev => prev.filter(task => task.id !== idDelete));
    }


  return (
    <section className="tasks-page">
      <header className="tasks-header">
        <h2>All Tasks</h2>
      </header>

      {tasksOverall.length === 0 && (
        <p className="tasks-empty">
          No tasks 🎉
        </p>
      )}

      <div className="task-grid">
        {tasksOverall.map((task) => (
          <article
            key={task.id}
            className={`task-card ${task.type}`}
          >
            <div className="task-card-header">
              <div className="task-title-block">
                <h3 className="task-name">{task.name}</h3>
                <p className="task-type">
                  {task.type || "Task"}
                </p>
              </div>
            </div>

            <div className="task-card-body">
              <div className="task-other-info">
                <span className="task-label">Due</span>
                <span className="task-date">
                  {task.dueDate || "No date set"}
                </span>
              </div>

                <button type='button' className = 'delete-button' onClick={() => deleteTasks(task.id)}>Delete</button>

            </div>

          </article>
        ))}
      </div>
    </section>
  );
}


export default TasksPage; 
