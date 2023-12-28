import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesNew } from "./ExercisesNew";
import { ExercisesShow } from "./ExercisesShow";
import { RoutinesIndex } from "./RoutinesIndex";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  const handleCreateExercise = (params, successCallback) => {
    console.log("handleCreateExercise", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      setExercises([...exercises, response.data]);
      successCallback();
    });
  };

  const handleShowExercise = (exercise) => {
    console.log("handleShowExercise", exercise);
    setIsExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };

  const handleUpdateExercise = (id, params, successCallback) => {
    console.log(handleUpdateExercise, params);
    axios.patch(`http://localhost:3000/exercises/${id}.json`, params).then((response) => {
      setExercises(
        exercises.map((exercise) => {
          if (exercise.id === response.data.id) {
            return response.data;
          } else {
            return exercise;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsExercisesShowVisible(false);
  };

  const handleDestroyExercise = (exercise) => {
    console.log("handleDestroyExercise", exercise);
    axios.delete(`http://localhost:3000/exercises/${exercise.id}.json`).then((response) => {
      console.log(response.data);
      setExercises(exercises.filter((e) => e.id !== exercise.id));
      handleClose();
      window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
    });
  };

  useEffect(handleIndexExercises, []);

  useEffect(handleIndexRoutines, []);

  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/exercises"
          element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise} />}
        />
        <Route path="/routines" element={<RoutinesIndex routines={routines} />} />
        <Route path="/exercises/new" element={<ExercisesNew onCreateExercise={handleCreateExercise} />} />
        <Route path="/logoutlink" element={<LogoutLink />} />
      </Routes>
      <Modal show={isExercisesShowVisible} onClose={handleClose}>
        <ExercisesShow
          exercise={currentExercise}
          onUpdateExercise={handleUpdateExercise}
          onDestroyExercise={handleDestroyExercise}
        />
      </Modal>
    </main>
  );
}
