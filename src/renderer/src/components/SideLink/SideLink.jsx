import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const SideLink = ({to,sub,icon,children}) => {
  return (
    <div className={`transition-all hover:bg-gray-600 rounded-lg flex items-center gap-2 px-3`}>
        {
            icon && <FontAwesomeIcon icon={icon}/>
        }
        <NavLink to={to} className={`${sub ? "text-gray-400 ml-4": "text-white"} w-full block py-2`}>
            {children}
        </NavLink>
    </div>
  )
}

export default SideLink