import { Home } from "./templates/pages/Home";
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import "./styles/global.css";
import "./styles/themes.css";

export function App() {
  return (
    <TaskContextProvider >
      <Home />
    </TaskContextProvider>
  );
}

