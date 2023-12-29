/* eslint-disable react/prop-types */
export function ExercisesIndex(props) {
  return (
    <div className="bg-zinc-900 text-white">
      <h1 className="text-5xl font-bold underline decoration-rose-500 underline-offset-8px gap-5 p-10">EXERCISES</h1>
      <div className="justify-center grid grid-cols-1 bg-zinc-900 shadow-2xl gap-5 p-3 align-center">
        {props.exercises.map((exercise) => (
          <div key={exercise.id} className="grid grid-cols-2">
            <div>
              <img className="aspect-square object-cover" src={exercise.image_url} />
            </div>
            <div>
              <h2 className="gap-10 p-5 text-left text-3xl font-bold underline decoration-rose-500 underline-offset-8px">
                {exercise.title}
              </h2>
              <p className="gap-10 p-5 text-left">{exercise.description}</p>
              <div className="p-10">
                <button
                  className="bg-rose-500 p-2 gap-1 rounded hover:rounded-full"
                  onClick={() => props.onShowExercise(exercise)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
