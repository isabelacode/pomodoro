import styles from "./styles.module.css";
import type { HomeProps } from '../../templates/pages/Home';

export function CountDown({ state }: HomeProps) {
  return (
    <div className={styles.container}>{state.formattedTimeRemaining}</div>
  );
}