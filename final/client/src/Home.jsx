// home page where the website basic info is displayed

function Home({tasks}) {
    return (
        <div>
        <p>
            Keep track of all assignments, due dates, and activities here!

        
        </p>

        <button data-micromodal-trigger="task-type-modal">
                Types of Tasks
            </button>

        <h2>All Tasks</h2>
        <ul>
            {tasks.map(t => (
                <li key={t.id}>
                    {t.name} - {t.type} - {t.dueDate}
                </li>
            ))}
        </ul>

        
 
        </div>

    )
}

export default Home