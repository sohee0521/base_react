import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="w-full flex justify-between px-20 py-5 bg-gray-100 font-black">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/logInPage"}>LOGIN</Link>
        </li>
        <li>
          <Link to={"/signUpPage"}>SIGN UP</Link>
        </li>
      </ul>
    </div>
  );
}
