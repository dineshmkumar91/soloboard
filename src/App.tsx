import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/layout/Layout";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
