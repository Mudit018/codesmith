import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { jsonToYaml, yamlToJson } from '../../../../main/converters/jsonYaml'
import { useEffect, useState } from 'react'

const JsonYml = () => {
  const [json, setJson] = useState('')
  const [yaml, setYaml] = useState('')

  // actual values do not matter, these are used to trigger the conversion
  // when 'submit' is clicked
  const [jy, setjy] = useState(false)
  const [yj, setyj] = useState(false)

  useEffect(() => { setYaml(jsonToYaml(json)) }, [jy])
  useEffect(() => { setJson(yamlToJson(yaml)) }, [yj])

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>JSON-YAML</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[65%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">JSON</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={json}
              onChange={(e) => setJson(e.target.value)}
            />
            <FontAwesomeIcon icon={faPenToSquare} className="absolute top-11 left-4" />
          </div>
          <div className="ml-auto mr-2 w-fit flex gap-4">
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md"
              type="reset"
              value={'Reset'}
              onClick={(_) => { setJson('') }}
            />
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md bg-blue-700"
              type="submit"
              value={'Submit'}
              onClick={(_) => setjy(!jy)}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[33%] h-fit'}>
        <h5 className="p-3 px-6 border-b border-gray-700">YAML</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={yaml}
              onChange={(e) => setYaml(e.target.value)}
            />
            <FontAwesomeIcon icon={faPenToSquare} className="absolute top-11 left-4" />
          </div>
          <div className="ml-auto mr-2 w-fit flex gap-4">
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md"
              type="reset"
              value={'Reset'}
              onClick={(_) => { setYaml('') }}
            />
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md bg-blue-700"
              type="submit"
              value={'Submit'}
              onClick={(_) => setyj(!yj)}
            />
          </div>
        </form>
      </Card>
    </div>
  )
}

export default JsonYml
