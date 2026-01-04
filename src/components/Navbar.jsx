import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-base-100 sticky top-0 bg-transparent ">
      <div className="navbar container mx-auto px-6">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold">
            <Logo />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>

          <a
            href="https://github.com/your-client-repo-link"
            target="_blank"
            className="btn btn-outline"
          >
            <FaGithub />
            Join as Developer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
