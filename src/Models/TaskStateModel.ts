import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number;
  formattedTimeRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config:{
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}