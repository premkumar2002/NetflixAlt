import Login from "./Login";
import Error from "./error";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

  // Create a browser router with routes
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
          <Browse />
      ),
    },
    {
      path: "/error",
      element: <Error />
    },
    {
      path: '*', // Catch-all for any undefined routes
      element: <Error />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
