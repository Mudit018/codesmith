import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "../../components/Card/Card"
import PageHeading from "../../components/PageHeading/PageHeading"
import { faEllipsis, faFaceSmile, faMagnifyingGlass, faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import profile from "../../assets/profile-gen-bg-dark.jpg"
import chatPeople from "../../assets/data.json"
const Chats = () => {
  return (
    <div className='w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0'>
    <PageHeading>Chats</PageHeading>
    <Card tailStyle={"w-[100%] border border-gray-700"}>
        <div className="flex flex-col xl:flex-row items-center">
            <div className="w-[100%] sm:w-[50%] xl:w-[25%]">
                <div className="flex items-center gap-4 p-6 text-xl border border-gray-700">
                    <h2>Active Conversations</h2>    
                    <span className="bg-gray-900 w-5 h-5 rounded-sm flex items-center justify-center text-sm">
                        6
                    </span>
                </div>
                <div className="p-4 w-full border border-gray-700 border-t-0 border-b-0">
                    <div className="relative">
                        <input type="search" placeholder="Search" className="bg-gray-900 focus:outline-none w-full p-2 px-4 pr-8 placeholder:text-gray-500"/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600 absolute right-2 top-1/2 -translate-y-1/2"/>
                    </div>
                    <ul className="my-4 h-96 overflow-y-scroll chats-ul">
                        {chatPeople.map((person) => {
                            return(
                                <li key={person.id} className="transition-all my-2 p-2 hover:bg-gray-700 cursor-pointer">
                                    <a href="/chats" className="flex gap-4 justify-center items-center">
                                        <div className="img">
                                            <img className="w-12 h-12 rounded-full" src={profile} alt="" />
                                        </div>
                                        <div className="w-36">
                                            <h3 className="font-bold">{person.name}</h3>
                                            <p className="text-gray-400 text-sm">{person.msg.length < 25 ? person.msg : person.msg.slice(0,25) + "..." }</p>
                                        </div>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>      
            <div className="w-[100%] xl:w-[75%]">
                <div className="flex items-center justify-between gap-4 p-4 text-xl border border-gray-700">
                    <div className="flex items-cente gap-4">
                        <div>
                            <img src={profile} alt="" className="w-14 h-14 rounded-full"/>
                        </div>
                        <div>
                            <h3 className="text-base font-bold">Henry Dholi</h3>
                            <p className="text-sm text-gray-400">Relpy to the message</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faEllipsis} className="text-gray-400 cursor-pointer"/>
                </div>
                <div className="h-96 overflow-y-scroll px-4">
                    <div className="my-4 w-fit">
                        <span className="my-1 text-gray-400 text-sm">Andri Thomas</span>
                        <p className="mt-2 rounded-xl rounded-tl-none bg-gray-900 w-fit p-4">I want to make an appointment tomorrow from 2:00 to 5:00pm?</p>
                        <span className="my-1 text-gray-400 text-sm">1:55pm</span>
                    </div>
                    <div className="my-4 w-fit ml-auto mr-2">
                        <p className="mt-2 rounded-xl rounded-tr-none bg-blue-600 w-fit p-4">Hello, Thomas! I will check the schedule and inform you</p>
                        <span className="my-1 text-gray-400 text-sm float-end">2:55pm</span>
                    </div>
                    <div className="my-4 w-fit">
                        <span className="my-1 text-gray-400 text-sm">Andri Thomas</span>
                        <p className="mt-2 rounded-xl rounded-tl-none bg-gray-900 w-fit p-4">I want to make an appointment tomorrow from 2:00 to 5:00pm?</p>
                        <span className="my-1 text-gray-400 text-sm">1:55pm</span>
                    </div>
                    <div className="my-4 w-fit ml-auto mr-2">
                        <p className="mt-2 rounded-xl rounded-tr-none bg-blue-600 w-fit p-4">Hello, Thomas! I will check the schedule and inform you</p>
                        <span className="my-1 text-gray-400 text-sm float-end">2:55pm</span>
                    </div>
                    <div className="my-4 w-fit">
                        <span className="my-1 text-gray-400 text-sm">Andri Thomas</span>
                        <p className="mt-2 rounded-xl rounded-tl-none bg-gray-900 w-fit p-4">I want to make an appointment tomorrow from 2:00 to 5:00pm?</p>
                        <span className="my-1 text-gray-400 text-sm">1:55pm</span>
                    </div>
                    <div className="my-4 w-fit ml-auto mr-2">
                        <p className="mt-2 rounded-xl rounded-tr-none bg-blue-600 w-fit p-4">Hello, Thomas! I will check the schedule and inform you</p>
                        <span className="my-1 text-gray-400 text-sm float-end">2:55pm</span>
                    </div>
                    <div className="my-4 w-fit">
                        <span className="my-1 text-gray-400 text-sm">Andri Thomas</span>
                        <p className="mt-2 rounded-xl rounded-tl-none bg-gray-900 w-fit p-4">I want to make an appointment tomorrow from 2:00 to 5:00pm?</p>
                        <span className="my-1 text-gray-400 text-sm">1:55pm</span>
                    </div>
                    <div className="my-4 w-fit ml-auto mr-2">
                        <p className="mt-2 rounded-xl rounded-tr-none bg-blue-600 w-fit p-4">Hello, Thomas! I will check the schedule and inform you</p>
                        <span className="my-1 text-gray-400 text-sm float-end">2:55pm</span>
                    </div>
                </div>
                <form className="flex items-center justify-between gap-8 p-6 text-xl border border-gray-700 border-b-0 flex-1">
                    <div className="bg-white flex-1 relative">
                        <input type="text" placeholder="Type Message" className="bg-gray-900 text-base focus:outline-none p-2 px-4 pr-20 w-full"/>
                        <FontAwesomeIcon icon={faPaperclip} className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-400 hover:text-blue-700"/>
                        <FontAwesomeIcon icon={faFaceSmile} className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer text-gray-400 hover:text-blue-700"/>
                    </div>
                    <button className="text-white bg-blue-700 h-10 w-10 rounded-md hover:bg-blue-600">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </form>
            </div>    
        </div>  
    </Card>
  </div>
  )
}

export default Chats