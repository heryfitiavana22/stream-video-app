import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/main-layout";
import { Videos } from "./videos/videos";
import { DetailVideo } from "./videos/detail-video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: "video/:url",
        element: <DetailVideo />,
      },
    ],
  },
]);

export function RouterDom() {
  return <RouterProvider router={router} />;
}
