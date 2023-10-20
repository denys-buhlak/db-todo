import { displayGreeting } from './../../utils/displayGreeting.js';

const Header = () => {
  return (
    <>
      <h1 hidden>My awesome Todo List Application</h1>
      <hgroup>
        <h2 className='text-center'>{displayGreeting()}.</h2>
        <h2 className='text-center'>Here is your Todo List</h2>
      </hgroup>
    </>
  );
};
export default Header;
