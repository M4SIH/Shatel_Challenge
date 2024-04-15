import Link from "next/link";
export default function Navbar() {
  const navigation = ["Community", "Pricing", "Feature"];
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="space-x-4 lg:flex nav__item">
          <Link
            href="/login/signup"
            className="px-6 py-3 mr-1 text-dark font-extrabold md:ml-5"
          >
            Fiber
          </Link>
        </div>

        <div className="hidden text-center ml-10 lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-medium text-gray-800 no-underline rounded-md light:text-dark hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden  space-x-4 lg:flex nav__item">
          <Link
            href="/login/signup"
            className="px-6 py-3 mr-1 text-dark font-semibold md:ml-5"
          >
            Sign In
          </Link>

          <Link
            href="/login/signIn"
            className="px-6 py-3 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
