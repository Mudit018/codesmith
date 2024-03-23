import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faSearch, faBell, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import ToggleBtn from '../ToggleBtn/ToggleBtn'
import HeaderIcon from '../HeaderIcon/HeaderIcon'
import profile from '../../assets/profile-gen-bg-dark.jpg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import peopleMsgs from '../../assets/data.json'

const Header = () => {
  const showSidebar = () => {
    document.getElementById('sidebar').style.cssText = `
                transform: translateX(0)
            `
  }
  return (
    <div className="bg-gray-800 px-5 py-3 w-full lg:w-4/5 float-end flex flex-row items-center justify-between">
      <FontAwesomeIcon
        icon={faBars}
        className="text-xl cursor-pointer inline lg:hidden"
        onClick={showSidebar}
      />
      <div className="hidden sm:flex sm:align-middle sm:justify-center sm:gap-3">
        <label htmlFor="search-input">
          <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search"
          className="text-gray-300 bg-transparent border-none focus:outline-none w-40 mr-3 placeholder:text-gray-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <ToggleBtn />
      </div>
    </div>
  )
}

export default Header
