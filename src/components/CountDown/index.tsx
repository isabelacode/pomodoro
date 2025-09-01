import styles from "./styles.module.css";
import type { HomeProps } from "../../templates/pages/Home/index";

export function CountDown({ state }: HomeProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
