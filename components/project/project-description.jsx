import styles from "./project-description.module.css";

export default function ProjectDescription({ children }) {
  return <p className={styles.description}>{children}</p>;
}
