import { LOGIN_BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GPTMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className=''>
      <div className='absolute -z-10'>
        <img src={LOGIN_BG_URL} alt='logo' />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
