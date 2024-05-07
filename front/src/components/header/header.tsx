import { Link } from "react-router-dom";
import Play from "../icons/play";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white shadow-md sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link className="flex items-center" to="/">
          <Play />
          <span className="text-lg font-bold">Stream app</span>
        </Link>
      </div>
    </header>
  );
}
