import styles from "./styles.module.css";
import type { TaskStateModel } from "../../Models/TaskStateModel";

type CountDownProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function CountDown(props: CountDownProps) {
  const { state } = props;
  return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
}
