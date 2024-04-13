import PageHeading from '../../components/PageHeading/PageHeading'
import Card from '../../components/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import * as base from '../../../../main/converters/numberBase'

const NumberBase = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [inputMenuval, setInputMenuval] = useState('bin')
  const [outputMenuval, setOutputMenuval] = useState('bin')
  const [showPrompt, setShowPrompt] = useState(false)

  /**
   * Convert `x` from base `m` to `n`
   *
   * @param {string} x - value in base `m`
   * @param {string} m - input base
   * @param {string} n - output base
   * @returns {string}
   */
  const convert = (x, m, n) => {
    if (m === n) return x
    if (m === 'bin' && n === 'dec') return base.binaryToDecimal(x)
    if (m === 'bin' && n === 'oct') return base.decimalToOctal(base.binaryToDecimal(x))
    if (m === 'bin' && n === 'hex') return base.decimalToHex(base.binaryToDecimal(x))
    if (m === 'oct' && n === 'bin') return base.decimalToBinary(base.octalToDecimal(x))
    if (m === 'oct' && n === 'dec') return base.octalToDecimal(x)
    if (m === 'oct' && n === 'hex') return base.decimalToHex(base.octalToDecimal(x))
    if (m === 'dec' && n === 'bin') return base.decimalToBinary(x)
    if (m === 'dec' && n === 'oct') return base.decimalToOctal(x)
    if (m === 'dec' && n === 'hex') return base.decimalToHex(x)
    if (m === 'hex' && n === 'bin') return base.decimalToBinary(base.hexToDecimal(x))
    if (m === 'hex' && n === 'oct') return base.decimalToOctal(base.hexToDecimal(x))
    if (m === 'hex' && n === 'dec') return base.hexToDecimal(x)
  }

  useEffect(() => {
    setOutput('')
    setInput('')
  }, [inputMenuval])

  useEffect(() => {
    try {
      setOutput(convert(input, inputMenuval, outputMenuval))
    } catch (Error) {
      setOutput('')
    }
  }, [outputMenuval])

  useEffect(() => {
    try {
      setOutput(convert(input, inputMenuval, outputMenuval))
    } catch (Error) {
      setOutput('')
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
      <PageHeading>NumberBase</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[65%]'}>
        <label>
          Select input type:
          <select
            value={inputMenuval}
            onChange={(e) => setInputMenuval(e.target.value)}
            className="p-3 px-6 border-b border-gray-700"
          >
            <option value="bin">Binary</option>
            <option value="oct">Octal</option>
            <option value="dec">Decimal</option>
            <option value="hex">Hexadecimal</option>
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
        <label>
          Select output type:
          <select
            defaultValue="dec"
            value={outputMenuval}
            onChange={(e) => setOutputMenuval(e.target.value)}
            className="p-3 px-6 border-b border-gray-700"
          >
            <option value="bin">Binary</option>
            <option value="oct">Octal</option>
            <option value="dec">Decimal</option>
            <option value="hex">Hexadecimal</option>
          </select>
        </label>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Text"
              className="bg-gray-700 p-3 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
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

export default NumberBase
