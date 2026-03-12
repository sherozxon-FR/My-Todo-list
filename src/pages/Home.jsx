import AddToDo from '../components/form/AddToDO'
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.page}>
           

            {/* Chap — motivatsion matn */}
            <div className={styles.left}>
                <span className={styles.badge}>✦ Stay focused</span>
                <h1 className={styles.heading}>
                    Plan your day,<br />
                    <span className={styles.accent}>own your time.</span>
                </h1>
                <p className={styles.sub}>
                    Kichik qadamlar katta natijalarga olib keladi.
                    Bugungi vazifalaringizni belgilab, maqsadingiz sari
                    bir qadam oldinga bos.
                </p>
                <div className={styles.stats}>
                    {/* <div className={styles.stat}>
                        <span className={styles.statNum}>∞</span>
                        <span className={styles.statLabel}>Imkoniyatlar</span>
                    </div> */}
                    <div className={styles.divider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>24/7</span>
                        <span className={styles.statLabel}>Ishlaydi</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.stat}>
                        <span className={styles.statNum}>100%</span>
                        <span className={styles.statLabel}>Bepul</span>
                    </div>
                </div>
            </div>

            {/* O'ng — forma */}
            <div className={styles.right}>
                <AddToDo />
            </div>

        </div>
    )
}

export default Home