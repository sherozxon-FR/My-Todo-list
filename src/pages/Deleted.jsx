import styles from './Deleted.module.css'
import { useTodo } from '../hooks/useToDo'

function Deleted() {
    const { todoList } = useTodo()
    const deletedTodos = todoList.filter(todo => todo.Delete === true)

    return (
        <div className={styles.wrapper}>

            {/* ── Header ── */}
            <div className={styles.pageHeader}>
                <div className={styles.iconBox}>
                    <svg className={styles.trashIcon} viewBox="0 0 24 24" fill="none">
                        <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6L18.2 20.2C18.0857 20.7 17.6 21 17.1 21H6.9C6.4 21 5.91429 20.7 5.8 20.2L5 6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <h2 className={styles.title}>O'chirilgan elementlar</h2>
                <div className={styles.badge}>{deletedTodos.length} ta</div>
            </div>

            {/* ── Table ── */}
            {deletedTodos.length === 0 ? (
                <p className={styles.empty}>Hech narsa o'chirilmagan</p>
            ) : (
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nomi</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deletedTodos.map((todo, index) => (
                                <tr key={todo.id} className={styles.row}>
                                    <td className={styles.num}>{index + 1}</td>
                                    <td className={styles.text}>{todo.name}</td>
                                    <td>
                                        <span className={styles.statusBadge}>
                                            <button> O'chirilgan</button>
                                        </span>
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

export default Deleted