import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';
import Registration from './registration.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> // main page */ }
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}
export default App;
