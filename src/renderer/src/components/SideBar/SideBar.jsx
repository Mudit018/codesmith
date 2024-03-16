import { NavLink } from 'react-router-dom'
import logo from '../../assets/cover.jpg'
import SideLink from '../SideLink/SideLink'
import SideLinkList from '../SideLinkList/SideLinkList'
import { faArrowLeft, faDashboard, faPager, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SideBar = () => {
  const hideSidebar = () => {
    document.getElementById('sidebar').style.cssText = `transform: translateX(full)`
  }
  return (
    <div
      id="sidebar"
      className="bg-gray-800 h-full lg:w-1/5 fixed lg:fixed -translate-x-full lg:-translate-x-0 transition-all py-4 ease-in-out duration-500 border-r border-black-600 z-20"
    >
      <div className="flex items-center justify-center gap-4 mb-12 p-3"> codeSmith
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="cursor-pointer text-gray-400 lg:hidden"
          onClick={hideSidebar}
        />
      </div>
      <div className="h-4/5 overflow-y-scroll scrollbar-hidden">
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Converters</h3>
          <SideLink to={'/profile'} icon={faUser}>
            JSON <> YAML</>
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            Timestamp
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            Number Base
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Encoders and Decoders</h3>
          <SideLink to={'/profile'} icon={faUser}>
            HTML
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            URL
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            JWT
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            Base64 Text
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Text</h3>
          <SideLink to={'/profile'} icon={faUser}>
            Regex
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            Markdown Preview
          </SideLink>
          <SideLinkList
            icon={faPager}
            to={'/'}
            subLinks={['Settings', 'Chats', 'Settings', 'Chats']}
          >
            Case Manipulator
          </SideLinkList>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Generators</h3>
          {/* <SideLinkList icon={faDashboard} to={'/'} subLinks={['']}>
            Hash
          </SideLinkList> */}
          <SideLinkList
            icon={faPager}
            to={'/'}
            subLinks={['Settings', 'Chats', 'Settings', 'Chats']}
          >
            Hash
          </SideLinkList>
          <SideLink to={'/profile'} icon={faUser}>
            UUID
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            Random Text
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            Checksum
          </SideLink>
          <SideLink to={'/profile'} icon={faUser}>
            Secret Keys
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Graphic</h3>
          <SideLink to={'/profile'} icon={faUser}>
            Color Picker
          </SideLink>
        </div>
      </div>
    </div>
  )
}


export default SideBar
