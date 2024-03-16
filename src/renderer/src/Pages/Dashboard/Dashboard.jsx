import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "../../components/Card/Card"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faArrowDown, faArrowUp, faBagShopping, faCartShopping, faL, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import googleLogo from "../../assets/google-logo-9808.png"
import facebookLogo from "../../assets/f-letter-logo-png-1571.png"
import githubLogo from "../../assets/512x512-logo-27148.png"
import xLogo from "../../assets/twitter-x-logo-42562.png"
import vimeoLogo from "../../assets/vimeo-png-logo-6032.png"
import avatar from "../../assets/profile-gen-bg-dark.jpg"
import { NavLink } from "react-router-dom"
import chatPeople from "../../assets/data.json"
import ChartComponent from "../../components/ChartComponent/Linear.tsx"
import Example from "../../components/ChartComponent/Linear.tsx"
import { Fragment } from "react"
import Linear from "../../components/ChartComponent/Linear.tsx"
import { Bar } from "recharts"
import Bars from "../../components/ChartComponent/Bar.tsx"
import PieCh from "../../components/ChartComponent/Pie.tsx"
import TreeCh from "../../components/ChartComponent/Tree.tsx"
  




const Dashboard = () => {
  return (
    <div className="w-full flex flex-wrap gap-2 gap-y-8 justify-between">
    <Card tailStyle={"p-6 rounded-md w-[100%] sm:w-[48%] lg:w-[23%]"}>
      <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center mb-2"><FontAwesomeIcon icon={faEye} /></div>
      <span className="font-bold text-2xl">356K</span>
      <div className="flex items-center justify-between mt-2 text-sm">
        <span className="text-gray-500 font-bold">Total views</span>
        <p className="flex items-center gap-2 text-green-400">
          <span>0.43%</span>
          <div div><FontAwesomeIcon icon={faArrowUp} /></div>
        </p>
      </div>  
    </Card>
    <Card tailStyle={"p-6 rounded-md w-[100%] sm:w-[48%] lg:w-[23%]"}>
        <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center mb-2"><FontAwesomeIcon icon={faCartShopping} /></div>
        <span className="font-bold text-2xl">$45,2K</span>
        <div className="flex items-center justify-between mt-2 text-sm">
          <span className="text-gray-500 font-bold">Total Profit</span>
          <p className="flex items-center gap-2 text-green-400">
            <span>4.35%%</span>
            <div div><FontAwesomeIcon icon={faArrowUp} /></div>
          </p>
        </div>  
    </Card>
    <Card tailStyle={"p-6 rounded-md w-[100%] sm:w-[48%] lg:w-[23%]"}>
        <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center mb-2"><FontAwesomeIcon icon={faBagShopping} /></div>
        <span className="font-bold text-2xl">2.450</span>
        <div className="flex items-center justify-between mt-2 text-sm">
          <span className="text-gray-500 font-bold">Total Product</span>
          <p className="flex items-center gap-2 text-green-400">
            <span>2.59%</span>
            <div div><FontAwesomeIcon icon={faArrowUp} /></div>
          </p>
        </div>  
    </Card>
    <Card tailStyle={"p-6 rounded-md w-[100%] sm:w-[48%] lg:w-[23%]"}>
        <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center mb-2"><FontAwesomeIcon icon={faUserGroup} /></div>
        <span className="font-bold text-2xl">3.456</span>
        <div className="flex items-center justify-between mt-2 text-sm">
          <span className="text-gray-500 font-bold">Total Users</span>
          <p className="flex items-center gap-2 text-red-600">
            <span>0.95%</span>
            <div div><FontAwesomeIcon icon={faArrowDown} /></div>
          </p>
        </div>  
    </Card>
    <div className="bg-gray-800 py-4 rounded-md w-[100%] lg:w-[68%] h-96">
      <Linear></Linear>
    </div>
    <div className="bg-gray-800 py-4 rounded-md w-[100%] lg:w-[30%] h-96">
      <Bars></Bars>
    </div>
    <div className="bg-gray-800 py-4 rounded-md w-[100%] lg:w-[30%] h-96">
      <h3 className="text-xl font-bold mx-auto w-fit">Visitors</h3>
      <PieCh></PieCh>
    </div>
    <div className="bg-gray-800 rounded-md w-[100%] lg:w-[68%] h-96">
      <TreeCh></TreeCh>
    </div>


    <Card cardHeading={"Top Channel"} tailStyle={"p-6 rounded-md w-[100%] lg:w-[68%] lg:mx-auto h-fit"}>
      <table className="w-full">
        <tr className="text-center capitalize">
          <th className="bg-gray-700 p-2">Source</th>
          <th className="bg-gray-700 p-2">visitors</th>
          <th className="bg-gray-700 p-2">revenue</th>
          <th className="bg-gray-700 p-2 hidden sm:table-cell">sales</th>
          <th className="bg-gray-700 p-2 hidden sm:table-cell">conversion</th>
        </tr>
        <tr className="text-center capitalize">
          <td className="flex items-center gap-4 p-2">
            <div className="w-14 h-14 p-2 rounded-full flex items-center justify-center bg-gray-700">
              <img className="w-100%" src={googleLogo} alt="" />
            </div>
            <span>Google</span>
          </td>
          <td className="p-2 text-center">3.5K</td>
          <td className="p-2 text-center text-green-400">$5,768</td>
          <td className="p-2 text-center hidden sm:table-cell">590</td>
          <td className="p-2 text-center hidden sm:table-cell text-blue-400">4.8%</td>
        </tr>
        <tr className="text-center capitalize">
          <td className="flex items-center gap-4 p-2">
            <div className="w-14 h-14 p-2 rounded-full flex items-center justify-center bg-gray-700">
              <img className="w-100%" src={facebookLogo} alt="" />
            </div>
            <span>Facebook</span>
          </td>
          <td className="p-2 text-center">3.5K</td>
          <td className="p-2 text-center text-green-400">$5,768</td>
          <td className="p-2 text-center hidden sm:table-cell">590</td>
          <td className="p-2 text-center hidden sm:table-cell text-blue-400">4.8%</td>
        </tr>
        <tr className="text-center capitalize">
          <td className="flex items-center gap-4 p-2">
            <div className="w-14 h-14 p-2 rounded-full flex items-center justify-center bg-gray-700">
              <img className="w-100%" src={githubLogo} alt="" />
            </div>
            <span>Github</span>
          </td>
          <td className="p-2 text-center">3.5K</td>
          <td className="p-2 text-center text-green-400">$5,768</td>
          <td className="p-2 text-center hidden sm:table-cell">590</td>
          <td className="p-2 text-center hidden sm:table-cell text-blue-400">4.8%</td>
        </tr>
        <tr className="text-center capitalize">
          <td className="flex items-center gap-4 p-2">
            <div className="w-14 h-14 p-2 rounded-full flex items-center justify-center bg-gray-700">
              <img className="w-100%" src={xLogo} alt="" />
            </div>
            <span>X-Twitter</span>
          </td>
          <td className="p-2 text-center">3.5K</td>
          <td className="p-2 text-center text-green-400">$5,768</td>
          <td className="p-2 text-center hidden sm:table-cell">590</td>
          <td className="p-2 text-center hidden sm:table-cell text-blue-400">4.8%</td>
        </tr>
        <tr className="text-center capitalize">
          <td className="flex items-center gap-4 p-2">
            <div className="w-14 h-14 p-2 rounded-full flex items-center justify-center bg-gray-700">
              <img className="w-100%" src={vimeoLogo} alt="" />
            </div>
            <span>Vimeo</span>
          </td>
          <td className="p-2 text-center">3.5K</td>
          <td className="p-2 text-center text-green-400">$5,768</td>
          <td className="p-2 text-center hidden sm:table-cell">590</td>
          <td className="p-2 text-center hidden sm:table-cell text-blue-400">4.8%</td>
        </tr>
      </table>
    </Card>
    <Card cardHeading={"Chats"} tailStyle={"p-6 rounded-md w-[100%] lg:w-[50%] lg:mx-auto xl:w-[30%]"}>
      <div className="flex flex-col justify-between gap-3">
      {chatPeople.map((person) => {
        return(
          <NavLink to="/chats" key={person.id}>
            <div className="flex items-center  gap-6 relative mb-2">
              <div className="w-14 rounded-full relative">
                <img src={avatar} alt="" className="min-w-14 rounded-full"/>
                <div className="w-4 h-4 rounded-full bg-white absolute right-0 bottom-0 flex items-center justify-center">
                  <span className={`w-3 h-3 rounded-full ${person.active ? "bg-green-700" : person.recentlyActive ? "bg-yellow-400" : "bg-gray-400" }`}></span>
                </div>
              </div>  
              <div className={`${[person.seen ? "text-gray-400" : "text-white"]}`}>
                <h4>{person.name}</h4>
                <div className="flex text-sm gap-2 items-end">
                  <p className="w-32">{person.msg.length < 25 ? person.msg : person.msg.slice(0,25) + "..."}</p>
                  <span className="text-gray-400 text-xs">{person.time}</span>
                </div>
              </div>
              {
                !person.seen && <span className="absolute top-1/2 right-0 w-6 h-6 rounded-full bg-blue-700 text-sm flex items-center justify-center">{person.noOfMsgs}</span>
              }
            </div>
          </NavLink>
        )
      })}
      </div>
    </Card>
    </div>
  )
}

export default Dashboard