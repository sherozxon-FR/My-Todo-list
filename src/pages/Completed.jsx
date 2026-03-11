import { useTodo } from '../hooks/useToDo'
import styles from './Completed.module.css'

function Completed() {
    const { todoList, deleteTodo } = useTodo()

    // faqat bajarilgan vazifalarni oladi
    const completedTodos = todoList.filter(todo => todo.completed)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Completed Tasks</h1>

            {completedTodos.length === 0 ? (
                <p className={styles.empty}>No completed tasks yet</p>
            ) : (
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task name</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {completedTodos.map((todo, index) => (
                                <tr key={todo.id}>
                                    <td>{index + 1}</td>
                                    <td className={styles.completed}>{todo.name}</td>
                                    <td>{todo.date}</td>
                                    <td>
                                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Completed