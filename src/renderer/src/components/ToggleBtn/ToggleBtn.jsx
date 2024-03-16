import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToggleBtn = () => {
  return (
    <div>
        <div className="flex align-middle justify-between gap-3">
            <label htmlFor="theme" className="w-14 h-8 bg-gray-400 relative overflow-hidden rounded-2xl">
                <input type="checkbox" id="theme" className="opacity-0 peer"/>
                <span className="bg-gray-400 absolute top-0 bottom-0 left-0 right-0 peer-checked:bg-blue-600 transition-all duration-200 cursor-pointer"></span>
                <span className="flex items-center justify-center bg-white h-6 w-6 left-2 top-1/2 -translate-y-1/2 rounded-full absolute peer-checked:right-2 peer-checked:left-auto transition-all cursor-pointer">
                    <FontAwesomeIcon className="text-black" icon={faMoon}/> 
                </span>
            </label>
        </div>
    </div>
  )
}
export default ToggleBtn