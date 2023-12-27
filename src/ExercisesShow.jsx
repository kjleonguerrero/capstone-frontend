/* eslint-disable react/prop-types */
export function ExercisesShow(props) {
  return (
    <div>
      <h1>Exercise Details</h1>
      <h3>{props.exercise.title}</h3>
      <p>{props.exercise.description}</p>
      <video src={props.exercise.video_url}></video>
    </div>
  );
}
