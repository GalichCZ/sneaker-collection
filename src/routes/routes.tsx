import CollectionPage from "@/pages/CollectionPage";
import MainPage from "@/pages/MainPage";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  { path: "/", element: <MainPage /> },
  { path: "/collection", element: <CollectionPage /> },
];
