import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeaderPopUp from "./HeaderPopUp/HeaderPopUp"

const HeaderIcon = ({icon, children}) => {
  return (
    <div className="group flex items-center justify-center bg-gray-700 p-2 w-7 h-7 rounded-full cursor-pointer relative before:absolute before:contnet-[''] before:top-0 before:right-0 before:w-2 before:h-2 before:rounded-full before:bg-red-700 ">
        <FontAwesomeIcon icon={icon}/>
        <HeaderPopUp>{children}</HeaderPopUp>
    </div>
  )
}

export default HeaderIcon