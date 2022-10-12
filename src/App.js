import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Statistics from './components/Statistics/Statistics';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
    const my_router = createBrowserRouter([
        {path:'/', element: <Main></Main>, children: [

            {path:'/topics', 
            loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Topics></Topics>},

            {path:'/topic/:id_variable', 
            loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id_variable}`),
            element: <TopicDetails></TopicDetails>},

            {path:'/statistics', 
            loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Statistics></Statistics>},

            {path:'/blog', element: <Blog></Blog> },            
        ]},
        
        {path:'/*', element: <PageNotFound></PageNotFound>}

    ]);

    return (
        <div className="App">
            <RouterProvider router={my_router}></RouterProvider>    
        </div>
    );
}

export default App;
