import Card from "../../components/Card/Card"
import PageHeading from "../../components/PageHeading/PageHeading"
import cover from "../../assets/cover.jpg"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profile from "../../assets/profile-gen-bg-dark.jpg"
import { faDribbble, faFacebookF, faGithub, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"
const Profile = () => {
  return (
    <div className="w-[100%] lg:w-[80%] mx-auto">
        <PageHeading>Profile</PageHeading>
        <Card tailStyle={"relative mx-auto pb-4"}>
            <div className="relative w-full">
                <div className="h-60 overflow-hidden">
                    <img src={cover} alt="" className="z-10 w-[100%]" />
                </div>
                <div className="absolute bottom-2 right-2">
                    <label htmlFor="cover-pick-input" className="bg-blue-700 hover:bg-blue-600 p-1 px-2 rounded-md w-16 flex items-center justify-between cursor-pointer">
                        <FontAwesomeIcon icon={faCamera} />
                        <span>Edit</span>
                    </label>
                    <input type="file" placeholder="Select" id="cover-pick-input" className="hidden"/>
                </div>
            </div>
            <div className="absolute h-36 w-36 rounded-full top-60 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-gray-500/50">
                <img src={profile} alt="" className="absolute h-32 w-32 rounded-full top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"/>
                <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    <label htmlFor="profile-pick-input" className="bg-blue-700 hover:bg-blue-600 p-1 px-2 rounded-md flex items-center justify-between cursor-pointer">
                            <FontAwesomeIcon icon={faCamera} />
                        </label>
                    <input type="file" placeholder="Select" id="profile-pick-input" className="hidden"/>
                </div>
            </div>
            <div className="text-center pt-24">
                <h2 className="text-2xl font-bold">Moatasim Ashraf</h2>
                <span className="text-gray-400">Ui/Ux Designer</span>
                <div className="flex items-center justify-between gap-6  w-72  sm:w-96  max-w-[100%] bg-gray-700 p-2 px-6 rounded-md mx-auto my-4">
                    <div className="flex flex-col sm:flex-row w-1/3 items-center gap-2">
                        <h3 className="font-bold">259</h3>
                        <span className="text-gray-400">Posts</span>
                    </div>
                    <div className="flex flex-col sm:flex-row w-1/3 items-center gap-2">
                        <h3 className="font-bold">129K</h3>
                        <span className="text-gray-400">Followers</span>
                    </div>
                    <div className="flex flex-col sm:flex-row w-1/3 items-center gap-2">
                        <h3 className="font-bold">2K</h3>
                        <span className="text-gray-400">Following</span>
                    </div>
                </div>
                <h3 className="font-bold my-5">About Me</h3>
                <p className="w-[98%] sm:w-[70%] text-sm text-gray-400 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.
                </p>
                <h3 className="font-bold my-5">Follow me on</h3>
                <ul className="flex items-center justify-between gap-4 w-fit mx-auto text-gray-400 text-xl">
                    <li>
                        <a href="#" className="transition-all hover:text-blue-700">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all hover:text-blue-700">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all hover:text-blue-700">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all hover:text-blue-700">
                            <FontAwesomeIcon icon={faDribbble} />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-all hover:text-blue-700">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </Card>
    </div>
  )
}

export default Profile