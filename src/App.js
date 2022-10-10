import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
    const my_router = createBrowserRouter([
        {path:'/', element: <Main></Main>, children: [
            {path:'/topics', element: <Topics></Topics>},
            {path:'/statistics', element: <Statistics></Statistics>},
            {path:'/blog', element: <Blog></Blog> }
        ]},

        {path:'/*', element: <h1>Page not found: 404</h1>}
    ]);

    return (
        <div className="App">
            <RouterProvider router={my_router}></RouterProvider>    
        </div>
    );
}

export default App;
