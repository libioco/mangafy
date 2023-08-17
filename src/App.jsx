import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from 'react-router-dom';
import Login from './pages/Login.jsx';
import './styles.scss';

function App() {
	return (
		<div className="app">
            <div className="container">
                <Login/>
            </div>
        </div>
	);
}

export default App;
