/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

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
    <div className="bg-zinc-900 text-white">
      <h1 className="text-3xl font-bold underline decoration-rose-500 underline-offset-8px gap-5 p-10">
        {props.exercise.title}
      </h1>
      <div className="justify-left grid grid-cols-2 bg-zinc-900 shadow-2xl gap-5 p-3">
        <div className="">
          <ReactPlayer url={props.exercise.video_url} />
        </div>
        <p className="pl-30 pt-20">{props.exercise.description}</p>
      </div>
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

// src={props.exercise.video_url}
