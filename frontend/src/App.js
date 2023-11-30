import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import StartPage from "./pages/StartPage";


const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("authenticated");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      navigate("/");
    }
  }, [isAuthenticated, navigate]);


  return element;
};

function App() {
  
    return (
      <div className="name">
      
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} /> 

        </Routes>

        
      </Router>
      </div>
    );
}

export default App;