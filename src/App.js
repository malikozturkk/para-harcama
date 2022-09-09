import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TodoApp from "./pages/TodoApp";
import Money from "./pages/Money"
import Login from "./pages/Login"
import NoPage404 from "./pages/NoPage404";
import Profile from "./pages/Profile";
import '../src/scss/App.scss'

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="todo" element={<TodoApp />} />
              <Route path="money" element={<Money />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<NoPage404 />} />
          </Route>
      </Routes>
    </div>
)
}

export default App;
