
import styles from "./Header.module.css";
import { Link } from "react-router-dom";



const navLinks = [
    { label: "Home", path: "/" },
    { label: "Active", path: "/active" },
    { label: "Completed", path: "/completed" },
];

function Header() {
    return (
        <header className={`${styles.header} `}>
            <div className={styles.logo}>Todo App</div>

            <nav>
                <ul className={styles.navList}>
                    {navLinks.map(({ label, path }) => (
                        <Link
                            key={label}
                            to={path}
                            className={`${styles.navItem} ${location.pathname === path ? styles.active : ""}`}
                        >
                            {label}
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;