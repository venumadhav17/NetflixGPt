import { createBrowserRouter } from "react-router-dom";
//import Browse from "./Browse";
//import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      {/*<Login />
      <Browse />*/}
    </div>
  );
};

export default Body;
