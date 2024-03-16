import { NavLink, Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"

const RootLayout = () => {
  return (
    <div className="bg-gray-900 text-white h-screen overflow-y-scroll">
        <Header />
        <main className="w-full lg:w-4/5 float-end p-8 flex flex-wrap">
            <Outlet />
        </main>
        <SideBar />        
    </div>
  )
}

export default RootLayout