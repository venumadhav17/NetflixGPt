import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black py-4 grid grid-cols-12 rounded-md px-4 font-semibold text-md'>
        <input
          className='border p-4 m-4 col-span-9 rounded-md bg-white'
          type='text'
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className=' p-4 m-4 bg-red-500 text-white rounded-md col-span-3'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
