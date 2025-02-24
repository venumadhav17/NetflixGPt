import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/");
      });
  };
  return (
    <div className='absolute w-full py-2 bg-gradient-to-b from-black z-10 pl-40 pr-20 flex justify-between items-center'>
      <img
        className='w-50 h-20'
        src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
      />
      {user && (
        <div className='flex items-center gap-4'>
          <img className='w-10 h-10' alt='usericon' src={user?.photoURL} />
          <button
            onClick={handleSignout}
            className='text-white bg-red-500 rounded-md p-2 font-semibold text-md hover:bg-red-600'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
