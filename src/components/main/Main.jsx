import { Outlet } from "react-router-dom";   // ← shu kerak edi
import styles from "./Main.module.css";
import Header from "../header/Header";

function Main() {
    return (
        <div className={styles.main}>
            <Header />
            <br /> <br /> <br />
            <Outlet />   
        </div>
    );
}

export default Main;