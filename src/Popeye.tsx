import { Link } from "react-router";

const Popeye = () => {
  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <Link to="/profile">Click here to go back</Link>
    </>
  );
};

export default Popeye;
