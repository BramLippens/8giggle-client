import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-gray-900 py-4 fixed w-full z-10">
        <ul className="flex justify-between px-4">
          <li>
            <Link to="/" className="text-white font-bold text-lg">8Giggle</Link>
          </li>
          <li>
            {/* submit */}
            <Link to="/create-post">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Post
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;