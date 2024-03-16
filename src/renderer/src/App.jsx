import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Calender from './Pages/Calender/Calender';
import RootLayout from './layout/RootLayout/RootLayout';
import Tasks from './Pages/Tasks/Tasks';
import Lists from './Pages/Lists/Lists';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Profile/Profile';
import Chats from './Pages/Chats/Chats';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/calender' element={<Calender />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/Tasks' element={<Tasks />}/>
          <Route path='/lists' element={<Lists />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/chats' element={<Chats />}/>
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
