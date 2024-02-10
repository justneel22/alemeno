import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/CourseDetails/Details";
import Dashboard from "./components/StudentDashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Router>
        {loading ? (
          <div className="loader-container">
            <BarLoader
              color={"#364fd6"}
              loading={loading}
              size={100}
            />
          </div>
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
              <Route
                path="/details/:id"
                element={
                  <>
                    <Details />
                  </>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <>
                    <Dashboard />
                  </>
                }
              />
            </Routes>
            <Footer/>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
