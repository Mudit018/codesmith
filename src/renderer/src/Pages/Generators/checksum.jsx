import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCopy } from '@fortawesome/free-solid-svg-icons';

const Checksum = () => {
  const [inputText, setInputText] = useState('');
  const [checksum, setChecksum] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    calculateChecksum();
  }, [inputText]);

  const calculateChecksum = () => {
    const crcTable = [];
    const POLYNOMIAL = 0xEDB88320;

    // Precompute CRC table
    for (let i = 0; i < 256; i++) {
      let crc = i;
      for (let j = 8; j > 0; j--) {
        if ((crc & 1) === 1) {
          crc = (crc >>> 1) ^ POLYNOMIAL;
        } else {
          crc >>>= 1;
        }
      }
      crcTable[i] = crc >>> 0;
    }

    let crc = 0xffffffff;
    for (let i = 0; i < inputText.length; i++) {
      const byte = inputText.charCodeAt(i);
      crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 0xff];
    }
    crc ^= 0xffffffff;
    setChecksum(crc.toString(16).toUpperCase());
  };

  const copyChecksum = () => {
    navigator.clipboard.writeText(checksum);
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 3000);
  };

  const resetInput = () => {
    setInputText('');
    setChecksum('');
  };

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>Checksum</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[65%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Input</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <FontAwesomeIcon icon={faPenToSquare} className="absolute top-11 left-4" />
          </div>
          <div className="ml-auto mr-2 w-fit flex gap-4">
            <input
              className="border border-gray-700 py-2 px-4 cursor-pointer rounded-md"
              type="button"
              value={'Reset'}
              onClick={resetInput}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[33%] h-fit'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Output</h5>
        <div className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Checksum"
              placeholder="Checksum"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={checksum}
              readOnly
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={copyChecksum}
            />
          </div>
        </div>
      </Card>
      {showPrompt && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 text-white p-3 rounded-md">
          Checksum copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Checksum;
