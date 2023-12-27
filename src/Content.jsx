import { ExercisesIndex } from "./ExercisesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesNew } from "./ExercisesNew";

export function Content() {
  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleCreateExercise = (params, successCallback) => {
    console.log("handleCreateExercise", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      setExercises([...exercises, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexExercises, []);

  return (
    <main>
      <Signup />
      <Login />
      <ExercisesIndex exercises={exercises} />
      <ExercisesNew onCreateExercise={handleCreateExercise} />
      <LogoutLink />
    </main>
  );
}
