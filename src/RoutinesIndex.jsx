/* eslint-disable react/prop-types */
export function RoutinesIndex(props) {
  const handleClick = () => {
    props.onDestroyRoutine(props.routine);
  };

  return (
    <div className="bg-zinc-900 text-white">
      <h1 className="text-3XL font-bold underline"> My Routine</h1>
      <div className="justify-center grid grid-cols-3 bg-zinc-900 shadow-2xl gap-5 p-3 align-center">
        {props.routines.map((routine) => (
          <div key={routine.id}>
            <h2>{routine.exercise.id}</h2>
            <button onClick={handleClick}>Remove From Routine</button>
          </div>
        ))}
      </div>
    </div>
  );
}
