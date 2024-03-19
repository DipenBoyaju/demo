import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout"
import Home from "./features/home/Home"
import SmartPhone from "./features/smartphone/SmartPhone"
import Laptop from "./features/laptop/Laptop"
import Fragrance from "./features/fragrance/Fragrance"
import Details from "./features/Details"



const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'product/detail/:id', element: <Details /> },
        { path: 'smartphone', element: <SmartPhone /> },
        { path: 'laptop', element: <Laptop /> },
        { path: 'fragrance', element: <Fragrance /> }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
