import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
      })
      .catch((error) => {
        navigate("/");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-full py-2 bg-gradient-to-b from-black z-10 pl-40 pr-20 flex justify-between items-center'>
      <img className='w-50 h-20' src={NETFLIX_LOGO} alt='logo' />
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
