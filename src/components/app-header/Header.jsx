import { useMemo } from "react";
import { displayGreeting } from "./../../utils/displayGreeting.js";
import { getRandomGreeting } from "./../../utils/getRandomGreeting.js";

const Header = () => {
  const greeting = useMemo(() => displayGreeting(), []);
  const randomString = useMemo(() => getRandomGreeting(), []);

  return (
    <>
      <h1 hidden>My awesome Todo List Application</h1>
      <hgroup>
        <h2 className="text-center">{greeting}</h2>
        <h2 className="text-center">Here is your Todo List</h2>
      </hgroup>
      <p className="text-end fst-italic   my-animated">{randomString}</p>
    </>
  );
};
export default Header;
