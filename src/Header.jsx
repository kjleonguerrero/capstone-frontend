import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-zinc-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                {/* <!-- <img className="h-9" src="logo.png" alt="logo"> -->
          Logo Here. */}
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link className="hover:text-rose-500" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-rose-500" to="/exercises">
                    Exercises
                  </Link>
                </li>

                {localStorage.jwt === undefined ? (
                  <>
                    <li>
                      <Link className="hover:text-rose-500" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-rose-500" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="hover:text-rose-500" to="/routines">
                        Routine
                      </Link>
                    </li>
                    <li>
                      <a className="hover:text-rose-500">
                        {" "}
                        <LogoutLink />
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </header>
  );
}
