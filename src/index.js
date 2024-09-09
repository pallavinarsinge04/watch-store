import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import About from './views/About/about';
import "./index.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    }
])
root.render(<RouterProvider router={router}/>)