import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const RootLayout = lazy(() => import("./layout/RootLayout/RootLayout"));
/***** Admin Pages ****/

const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Calender = lazy(() => import("./Pages/Calender/Calender"));
const Tasks = lazy(() => import("./Pages/Tasks/Tasks"));
const Lists = lazy(() => import("./Pages/Lists/Lists"));
const Settings = lazy(() => import("./Pages/Settings/Settings"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Chats = lazy(() => import("./Pages/Chats/Chats"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/RootLayout", element: <Navigate to="/admindashboard" /> },
      { path: "/admindashboard", exact: true, element: <AdminDashboard /> },
      { path: "/admissionForm", exact: true, element: <AdmissionForm /> },
      { path: "/newTeacher", exact: true, element: <NewTeacher /> },
      { path: "/studentforAdmin", exact: true, element: <StudentforAdmin /> },
      { path: "/cbse", exact: true, element: <Cbse /> },
      { path: "/mis", exact: true, element: <Mis /> },
      { path: "/teacherList", exact: true, element: <TeacherList /> },
      { path: "/changepwd", exact: true, element: <ChangePassword /> },
      { path: "/frontOffice", exact: true, element: <FrontOffice /> },
    ],
  }

];

export default ThemeRoutes;


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/calender" element={<Calender />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="/lists" element={<Lists />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/chats" element={<Chats />}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;