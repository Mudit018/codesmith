import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const MarkdownPreview = () => {
  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>MarkdownPreview</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[65%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Input</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere
              fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet
            </textarea>
            <FontAwesomeIcon icon={faPenToSquare} className="absolute top-11 left-4" />
          </div>
          <div className="ml-auto mr-2 w-fit flex gap-4">
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md"
              type="reset"
              value={'Reset'}
            />
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md bg-blue-700"
              type="submit"
              value={'Submit'}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[33%] h-fit'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Output</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere
              fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet
            </textarea>
            <FontAwesomeIcon icon={faPenToSquare} className="absolute top-11 left-4" />
          </div>
          <div className="ml-auto mr-2 w-fit flex gap-4">
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md"
              type="reset"
              value={'Reset'}
            />
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md bg-blue-700"
              type="submit"
              value={'Submit'}
            />
          </div>
        </form>
      </Card>
    </div>
  )
}

export default MarkdownPreview
