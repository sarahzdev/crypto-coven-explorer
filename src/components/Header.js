import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center items-center w-full p-4">
      <Link to="/">
        <span className="text-2xl">crypto coven explorer</span>
      </Link>
    </header>
  );
}

export default Header;
