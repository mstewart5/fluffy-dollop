import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import Registration from './registration.tsx';
import MyButton from './ButtonMike.jsx';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<MyButton />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>

    
  );
}
export default App;
