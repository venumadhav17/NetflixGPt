import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='absolute w-full py-1 bg-gradient-to-b from-black z-10 pl-10 pr-20 flex justify-between items-center'>
      <img className='w-40 h-20' src={NETFLIX_LOGO} alt='logo' />
      {user && (
        <div className='flex items-center gap-3'>
          {showGptSearch && (
            <select
              className='p-2 rounded-md bg-gray-900 text-white font-semibold'
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
              {/*}<option value='hindi'>Hindi</option>
            <option value='spanish'>Spanish</option>*/}
            </select>
          )}
          <button
            onClick={handleGPTSearchClick}
            className='py-2 px-4 m-2 bg-purple-500 rounded-md text-white font-semibold'
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
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
