import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import RootLayout from './layout/RootLayout/RootLayout';
import Settings from './Pages/Settings/Settings';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />}>
          <Route path='*' element={<Dashboard />}/>
          <Route path='/settings' element={<Settings />}/>
        </Route>
          <Route path='*' element={<NotFound />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
