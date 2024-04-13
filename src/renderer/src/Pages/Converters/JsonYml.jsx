import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { jsonToYaml, yamlToJson } from '../../../../main/converters/jsonYaml'
import { useEffect, useState } from 'react'

const JsonYml = () => {
  const [showPrompt, setShowPrompt] = useState(false)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [menuval, setMenuval] = useState('json')

  useEffect(() => {
    setInput('')
    setOutput('')
  }, [menuval])

  useEffect(() => {
    if (menuval === 'json') {
      setOutput(jsonToYaml(input))
    } else {
      setOutput(yamlToJson(input))
    }
  }, [input])

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setShowPrompt(true)
    setTimeout(() => {
      setShowPrompt(false)
    }, 3000)
  }

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>JSON to YAML</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[65%]'}>
        <label>
          Select input type:
          <select
            defaultValue="json"
            value={menuval}
            onChange={(e) => setMenuval(e.target.value)}
            className="p-3 px-6 border-b border-gray-700"
          >
            <option value="json">JSON</option>
            <option value="yaml">YAML</option>
          </select>
        </label>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Text"
              className="bg-gray-700 p-3 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={() => handleCopy(input)}
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
              className="bg-gray-700 p-3 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={output}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={() => handleCopy(output)}
            />
          </div>
        </form>
      </Card>
      {showPrompt && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 text-white p-3 rounded-md">
          Text copied to clipboard!
        </div>
      )}
    </div>
  )
}

export default JsonYml
