/* eslint-disable react/prop-types */
export function ExercisesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExercise(props.exercise.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyExercise(props.exercise);
  };

  return (
    <div>
      <h1>Exercise Details</h1>
      <h3>{props.exercise.title}</h3>
      <p>{props.exercise.description}</p>
      <video src={props.exercise.video_url}></video>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.exercise.title} name="title" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.exercise.desciption} name="description" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={props.exercise.image_url} name="image_url" type="text" />
        </div>
        <div>
          Video URL: <input defaultValue={props.exercise.video_url} name="video_url" type="text" />
        </div>
        <button type="submit">Update Exercise</button>
      </form>
      <button onClick={handleClick}>Delete Exercise</button>
    </div>
  );
}
