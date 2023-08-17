import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import './styles.scss';

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }, 
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
]);

function App() {
	return (
		<div className="app">
            <div className="container">
                <RouterProvider router={router}/>
            </div>
        </div>
	);
}

export default App;
