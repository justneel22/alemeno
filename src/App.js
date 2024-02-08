import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/CourseDetails/Details";

function App() {
  return (
    <>
      <Router>
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
                <Details/>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
