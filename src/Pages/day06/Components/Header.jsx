import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="w-full flex justify-between px-20 py-5 bg-gray-100 font-black">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/sub01"}>Sub01</Link>
        </li>
        <li>
          <Link to={"/sub02"}>Sub02</Link>
        </li>
        <li>
          <Link to={"/sub03"}>sub03</Link>
        </li>
      </ul>
    </div>
  );
}
