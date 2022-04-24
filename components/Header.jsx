import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <h1 className={styles.name}>
          Henning <span className={styles["last-name"]}>Anderssen</span>
        </h1>
        <span className={styles.position}>Frontend- og fullstackutvikler</span>
      </div>
    </header>
  );
}
