import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-40 mr-4'>
      <img
        className='rounded'
        alt='Movie Card'
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
