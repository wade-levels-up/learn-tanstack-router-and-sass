import { Link } from "react-router";

export default function App() {
  return (
    <>
      <h1>Hello! This is the Home page</h1>
      <p>This page uses a Sass scss file for it's styling!</p>
      <ul>
        <li>
          <Link to="profile">Profile Page</Link>
        </li>
      </ul>
    </>
  );
}
