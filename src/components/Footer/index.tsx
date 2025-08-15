import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica Pomodoro</a>
      <a href="">Timer Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
