import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Faol", path: "/active" },
    { label: "Bajarilgan", path: "/completed" },
    { label: "O'chirilgan", path: "/deleted" },
];

function Header() {
    const { pathname } = useLocation();

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
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;