import { useState, useEffect } from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const TextComparator = () => {
  const [oldText, setOldText] = useState('')
  const [newText, setNewText] = useState('')
  const [difference, setDifference] = useState('')
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const computedDifference = computeDifference(oldText, newText)
    setDifference(computedDifference)
  }, [oldText, newText])

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setShowPrompt(true)
    setTimeout(() => {
      setShowPrompt(false)
    }, 3000)
  }

  const computeDifference = (oldText, newText) => {
    const oldLines = oldText.split('\n')
    const newLines = newText.split('\n')
    let diffOutput = ''
    const maxLength = Math.max(oldLines.length, newLines.length)
    for (let i = 0; i < maxLength; i++) {
      const oldLine = oldLines[i] || ''
      const newLine = newLines[i] || ''
      if (oldLine === newLine) {
        diffOutput += oldLine + '\n'
      } else {
        diffOutput += `<span style="color: red;">- ${oldLine}</span>` + '\n'
        diffOutput += `<span style="color: green;">+ ${newLine}</span>` + '\n'
      }
    }
    return diffOutput
  }

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>Text Comparator</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[50%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Old Text</h5>
        <form className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="OldText"
              placeholder="Old text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={oldText}
              onChange={(e) => setOldText(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={() => handleCopy(oldText)}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[50%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">New Text</h5>
        <form className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="NewText"
              placeholder="New text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={() => handleCopy(newText)}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Difference</h5>
        <pre className="p-4 px-6" dangerouslySetInnerHTML={{ __html: difference }} />
      </Card>
      {showPrompt && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 text-white p-3 rounded-md">
          Text copied to clipboard!
        </div>
      )}
    </div>
  )
}

export default TextComparator
