import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext'

//styles
import './App.css'

//pages
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import Project from './pages/project/Project'

//components
import Navbar from './compenents/Navbar';
import Sidebar from './compenents/Sidebar';
import OnlineUsers from './compenents/OnlineUsers';


function App() {
  const { authIsReady, user} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        {user && <Sidebar/>}
        <div className="container">
          <Navbar/>
          <Routes>
              <Route 
                  path="/"
                  //element={<Dashboard/>}
                  element={user ? <Dashboard/> : <Navigate to="/login"/>}
              />
              <Route 
                  path="/create"
                  //element={<Create/>}
                  element={user ? <Create/> : <Navigate to="/login"/>}
              />
              <Route 
                  path="/projects/:id"
                  //element={<Project/>}
                  element={user ? <Project/> : <Navigate to="/login"/>}
              />
              <Route 
                  path="/login"
                  //element={<Login/>}
                  element={user ? <Navigate to="/"/> : <Login/>}
              />
              <Route 
                  path="/signup"
                  //element={<Signup/>}
                  element={user && user.displayName ? <Navigate to="/"/> : <Signup/>}
              />
          </Routes>
        </div>
        {user && <OnlineUsers/>}
      </BrowserRouter>
      )}
    </div>
  );
}

export default App
