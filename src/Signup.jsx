import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="bg-zinc-900 text-white">
      <h1 className="text-5xl font-bold underline decoration-rose-500 underline-offset-8px gap-5 p-10">SIGNUP</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Full Name:{" "}
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="text-black mt-1 mb-2 m-auto  block w-96 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            required
          />
        </div>
        <div>
          Email:{" "}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="text-black mt-1 mb-2 m-auto block w-96 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            required
          />
        </div>
        <div>
          Password:{" "}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className=" text-black mt-1 mb-2 m-auto  block w-96 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            required
          />
        </div>
        <div>
          Password confirmation:{" "}
          <input
            name="password_confirmation"
            type="password"
            placeholder="Password Confirmation"
            className="text-black mt-1 mb-4 m-auto  block w-96 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            required
          />
        </div>
        <button className="bg-rose-500 p-2 gap-1 rounded hover:rounded-full" type="submit">
          Signup
        </button>
        <p className="p-3">
          Already have an account?
          <Link className="text-sky-500" to="/signup">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
