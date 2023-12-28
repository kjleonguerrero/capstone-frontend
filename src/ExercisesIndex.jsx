/* eslint-disable react/prop-types */
export function ExercisesIndex(props) {
  return (
    <div className="bg-zinc-900 text-white">
      <h1 className="text-3XL font-bold underline">All Exercises</h1>
      <div className="justify-center grid grid-cols-3 bg-zinc-900 shadow-2xl gap-5 p-3 align-center">
        {props.exercises.map((exercise) => (
          <div key={exercise.id}>
            <h2>{exercise.title}</h2>
            <p>{exercise.description}</p>
            <img className="odject-scale-down aspect-square object-cover" src={exercise.image_url} />
            <video src={exercise.video_url} />
            <button onClick={() => props.onShowExercise(exercise)}>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
