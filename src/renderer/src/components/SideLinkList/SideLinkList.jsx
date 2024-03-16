import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SideLink from "../SideLink/SideLink"

const SideLinkList = ({children,icon,subLinks, to}) => {
  return (
    <div className="group">
        <div className="flex items-center justify-between w-full cursor-pointer transition-all hover:bg-gray-600 px-3 py-2 rounded-lg peer group">
            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={icon} />
                <h3>{children}</h3>
            </div>
            <FontAwesomeIcon icon={faAngleDown} className="group-hover:hidden"/>
            <FontAwesomeIcon icon={faAngleUp} className="hidden group-hover:inline"/>
        </div>
        <div className="flex flex-col gap-0">
            {subLinks.map((link) => {
                return (
                    <div key={link} className="h-0 overflow-hidden group-hover:h-10 transition-all duration-500">
                        <SideLink sub={true} to={link ? link.toLowerCase() : ""}>{link ? link : "Home"}</SideLink>
                    </div>
                )
            }) }
        </div>
    </div>
  )
}

export default SideLinkList