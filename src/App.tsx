import './App.css'
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';

function App() {
  return (
    <TaskProvider>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Home />
      </div>
    </TaskProvider>
  );
}

export default App;
