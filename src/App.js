import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';

// Add react-router-dom imports
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"; 

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>} /> 
 ));

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter}>REPLACE ME</RouterProvider>
  );
}

export default App;
