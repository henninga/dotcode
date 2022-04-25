import styles from "./project.module.css";

export default function Project({
  children,
  company,
  position,
  periodFrom,
  periodTo,
}) {
  return (
    <div className={styles.project}>
      <header className={styles.header}>
        <h3 className={styles.position}>{position}</h3>
        <span className={styles["project-date"]}>
          {periodFrom} - {periodTo}
        </span>
      </header>
      <strong className={styles.company}>{company}</strong>
      {children}
    </div>
  );
}
