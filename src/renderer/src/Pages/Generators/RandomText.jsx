import { useState } from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { generateLoremIpsum } from '../../../../main/generators/randomText'

const RandomTextGenerator = () => {
  const [wordsPerSentence, setWordsPerSentence] = useState(10)
  const [sentencePerPara, setSentencePerPara] = useState(3)
  const [paragraph, setParagraphs] = useState(1)
  const [startWithLoremIpsum, setStartWithLoremIpsum] = useState(true)
  const [generatedText, setGeneratedText] = useState('')

  const generateRandomText = () => {
    setGeneratedText(
      generateLoremIpsum(paragraph, sentencePerPara, wordsPerSentence, startWithLoremIpsum)
    )
  }

  const copyText = () => {
    navigator.clipboard.writeText(generatedText)
    alert('Text copied to clipboard!')
  }

  return (
    <div className="w-full flex flex-wrap justify-between gap-8 lg:gap-0">
      <Card tailStyle={'w-[100%]'}>
        <div className="p-4 px-6">
          <PageHeading>Random Text Generator</PageHeading>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-4 w-full">
              <label>
                Words per sentence
                <input
                  type="number"
                  className="bg-gray-700 p-3 pl-4 focus:outline-none border-transparent border focus:border-blue-600 focus:border w-1/3"
                  value={wordsPerSentence}
                  onChange={(e) => setWordsPerSentence(e.target.value)}
                />
              </label>
              <label>
                Sentences per paragraph
                <input
                  type="number"
                  className="bg-gray-700 p-3 pl-4 focus:outline-none border-transparent border focus:border-blue-600 focus:border w-1/3"
                  value={sentencePerPara}
                  onChange={(e) => setSentencePerPara(e.target.value)}
                />
              </label>
              <label>
                Paragraphs
                <input
                  type="number"
                  className="bg-gray-700 p-3 pl-4 focus:outline-none border-transparent border focus:border-blue-600 focus:border w-1/3"
                  value={paragraph}
                  onChange={(e) => setParagraphs(e.target.value)}
                />
              </label>
              <label>
                Yes
                <input
                  type="radio"
                  className="bg-gray-700 p-3 pl-4 focus:outline-none border-transparent border focus:border-blue-600 focus:border w-1/3"
                  // value={true}
                  checked={startWithLoremIpsum === true}
                  onChange={(_) => setStartWithLoremIpsum(true)}
                />
              </label>
              <label>
                No
                <input
                  type="radio"
                  className="bg-gray-700 p-3 pl-4 focus:outline-none border-transparent border focus:border-blue-600 focus:border w-1/3"
                  // value={false}
                  checked={startWithLoremIpsum === false}
                  onChange={(_) => setStartWithLoremIpsum(false)}
                />
              </label>
              <button
                className="bg-blue-700 text-white py-3 px-6 rounded-md cursor-pointer"
                onClick={generateRandomText}
              >
                Generate Text
              </button>
            </div>
          </div>
          <div className="relative mt-4">
            <textarea
              id="generatedText"
              className="bg-gray-700 p-3 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48 w-full"
              value={generatedText}
              readOnly
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-3 right-4 cursor-pointer text-gray-300"
              onClick={copyText}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default RandomTextGenerator
