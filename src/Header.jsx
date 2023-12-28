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
                  <a className="hover:text-rose-500" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-rose-500" href="#">
                    Exercises
                  </a>
                </li>
                <li>
                  <a className="hover:text-rose-500" href="#">
                    Routine
                  </a>
                </li>
                <li>
                  <a className="hover:text-rose-500" href="">
                    Login
                  </a>
                </li>
                <li>
                  <a className="hover:text-rose-500" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </header>
  );
}
