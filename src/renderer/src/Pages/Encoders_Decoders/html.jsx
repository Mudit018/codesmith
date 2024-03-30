import { useState, useEffect } from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const HtmlEncoderDecoder = () => {
  const [encodedText, setEncodedText] = useState('')
  const [decodedText, setDecodedText] = useState('')
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    setEncodedText(encodeHtml(decodedText))
  }, [decodedText])

  useEffect(() => {
    setDecodedText(decodeHtml(encodedText))
  }, [encodedText])

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setShowPrompt(true)
    setTimeout(() => {
      setShowPrompt(false)
    }, 3000)
  }

  const encodeHtml = (text) => {
    return text.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
      return '&#' + i.charCodeAt(0) + ';'
    })
  }

  const decodeHtml = (text) => {
    const tempElement = document.createElement('div')
    tempElement.innerHTML = text
    return tempElement.textContent || tempElement.innerText
  }

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>HTML Encoder/Decoder</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[50%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Encode</h5>
        <form className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Encode"
              placeholder="Text to encode"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={decodedText}
              onChange={(e) => setDecodedText(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={() => handleCopy(encodedText)}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[50%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Decode</h5>
        <form className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Decode"
              placeholder="Text to decode"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={encodedText}
              onChange={(e) => setEncodedText(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={() => handleCopy(decodedText)}
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

export default HtmlEncoderDecoder
