import { NavLink } from 'react-router-dom'
import SideLink from '../SideLink/SideLink'
// import SideLinkList from '../SideLinkList/SideLinkList'
import {
  faArrowLeft,
  faClock,
  faHashtag,
  faSpellCheck,
  faKey,
  faFont,
  faTextHeight,
  faUserSecret,
  faEyedropper,
  faFileCode,
  faKeyboard,
  faArrowDown91,
  faLaptopCode,
  faTerminal,
  faCode,
  faCubes,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SideBar = () => {
  const hideSidebar = () => {
    document.getElementById('sidebar').style.cssText = `
                transform: translateX(full)
            `
  }
  return (
    <div
      id="sidebar"
      className="bg-gray-800 h-full lg:w-1/5 fixed lg:fixed -translate-x-full lg:-translate-x-0 transition-all py-4 ease-in-out duration-500 border-r border-blue-600 z-20"
    >
      <div className="flex items-center justify-center gap-4 mb-12 p-3">
        <NavLink to="*" className="uppercase text-2xl min-h-14 flex items-center justify-center">
          codeSmith
        </NavLink>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="cursor-pointer text-gray-400 lg:hidden"
          onClick={hideSidebar}
        />
      </div>
      <div className="h-4/5 overflow-y-scroll scrollbar-hidden">
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Api Testing</h3>
          <SideLink to={'/apiTestingHttp'} icon={faUser}>
            Http
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Converters</h3>
          <SideLink to={'/json-yml'} icon={faTerminal}>
            JSON <> YAML</>
          </SideLink>
          <SideLink to={'/timestamp'} icon={faClock}>
            Timestamp
          </SideLink>
          <SideLink to={'/number-base'} icon={faArrowDown91}>
            Number Base
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Encoders and Decoders</h3>
          <SideLink to={'/html'} icon={faFileCode}>
            HTML
          </SideLink>
          <SideLink to={'/url'} icon={faLaptopCode}>
            URL
          </SideLink>
          <SideLink to={'/jwt'} icon={faCode}>
            JWT
          </SideLink>
          <SideLink to={'/base64'} icon={faKeyboard}>
            Base64 Text
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Text</h3>
          <SideLink to={'/regex'} icon={faSpellCheck}>
            Regex
          </SideLink>
          <SideLink to={'/markdown-preview'} icon={faCubes}>
            Markdown Preview
          </SideLink>
          <SideLink to={'/case-manipulator'} icon={faTextHeight}>
            Case Manipulator
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Generators</h3>
          {/* <SideLinkList icon={faPager} to={'/'} subLinks={['Settings', 'Chats', 'Settings', 'Chats']}>
            Hash
          </SideLinkList> */}
          <SideLink to={'/hash'} icon={faHashtag}>
            Hash
          </SideLink>
          <SideLink to={'/uuid'} icon={faCode}>
            UUID
          </SideLink>
          <SideLink to={'/random-text'} icon={faFont}>
            Random Text
          </SideLink>
          <SideLink to={'/checksum'} icon={faKey}>
            Checksum
          </SideLink>
          <SideLink to={'/secret-keys'} icon={faUserSecret}>
            Secret Keys
          </SideLink>
        </div>
        <div className="px-8">
          <h3 className="uppercase text-gray-500 px-3 mb-2">Graphic</h3>
          <SideLink to={'/color-picker'} icon={faEyedropper}>
            Color Picker
          </SideLink>
        </div>
      </div>
    </div>
  )
}

export default SideBar
