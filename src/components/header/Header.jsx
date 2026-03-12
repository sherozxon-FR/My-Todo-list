import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useTodo } from '../../context/TodoContext'

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Faol", path: "/active" },
    { label: "Bajarilgan", path: "/completed" },
    { label: "O'chirilgan", path: "/deleted" },
];

function Header() {
    const { pathname } = useLocation();
    const { todoList } = useTodo()

    const activeTodos = todoList.filter(todo => !todo.completed && !todo.Delete)
    const completedTodos = todoList.filter(todo => todo.completed && !todo.Delete)
    const deletedTodos = todoList.filter(todo => todo.Delete === true)

    const getCount = (path) => {
        if (path === '/active') return activeTodos.length
        if (path === '/completed') return completedTodos.length
        if (path === '/deleted') return deletedTodos.length
        return todoList.length  // Home
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Todo App</div>
            <nav>
                <ul className={styles.navList}>
                    {navLinks.map(({ label, path }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className={`${styles.navItem} ${pathname === path ? styles.active : ""}`}
                            >
                                {label}
                                <span className={styles.count}>
                                    {getCount(path)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;