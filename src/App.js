import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"

// import each component we need
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


// add a route to each component depending on url
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="edit/:id" element={<EditExercise />} />
          <Route path="create" element={<CreateExercise />} />
          <Route path="user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
