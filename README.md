# Netflix GPT

1. Create Vite App
2. Configured Tailwind CSS

- Header
- Routing (react-router-dom)
- Login Form
- Sign Up Form
- Form Validation/s
- useRef (Instead of useState -> To get input values from input boxes)
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Navigation (useNavigate)
- Created Redux Store with userSlice (dispatch,useSelector, subscribe to an action)
- Implemented Sign Out
- Update Profile
- BugFix: Sign Up user displayName and Profile picture update.
- BugFix: If the user is not logged in Redirect /browse to Login page and vice-versa.
- BugFix: Unsubscribed to the onAuthStateChanged callback.
- Add hardcoded values to the constants file.
- Regsiter TMDB API & Create an app & get access token.
- Get Data from TMDB now playing movies list API(useEffect for calling api once).
- Keep Options in constants file.
- Custom Hook for Now Playing Movies.
- Create movieSlice.
- Update Store with movies Data.
- Planning for Main Container & Secondary Container.
- Fetch Data for Trailer Video.
- Update Store with Trailer Video Data.
- Embeeded the Youtube Video and make it autoplay and mute.
- Tailwind Classes to make Main Container look awesome.
- Build Secondary Component with Movie Lists.
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse Page amazing with Tailwind CSS
- usePopularMovies Custom Hook

# Features

- Login/Sign Up
  - Sign In / Sign Up Form
  - Redirect to Browse Page

1. Browse Page ( After Authentication)

- Header
- Main Movie
  - Trailer in Background
  - Movie Title and Description
  - Play Button
  - Movie Suggestions
    - MovieLists \* n

2. Netflix GPT

   - Search Bar
   - Movie Suggestions

Planning

3. Main Container

   - VideoBackground
   - VideoTitle
     Secondary Container
   - MovieList \* n
     - Cards \* n

4. Secondary Container
   - MovieList - Popular
     - MovieCard \* n
   - MovieList - Now Playing
   - MovieList - Trending
   - MovieList - Horror
