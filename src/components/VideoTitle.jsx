const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-36 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-md w-1/4 font-semibold'>{overview}</p>
      <div>
        <button className='bg-white text-black p-2 rounded w-26 mr-3 font-semibold text-center hover:opacity-70'>
          ▶️ Play
        </button>
        <button className='bg-gray-400/60 py-2 px-3 rounded font-semibold text-white text-center hover:opacity-70'>
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
