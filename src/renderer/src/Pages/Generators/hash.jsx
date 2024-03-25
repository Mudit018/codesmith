import React, { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Md5 } from 'ts-md5/dist/md5';
import { SHA1, SHA256, SHA512, enc } from 'crypto-js';

const HashGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [hash, setHash] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('MD5');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    generateHash();
  }, [inputText, selectedAlgorithm]);

  const generateHash = () => {
    let generatedHash = '';
    switch (selectedAlgorithm) {
      case 'MD5':
        generatedHash = Md5.hashStr(inputText).toString();
        break;
      case 'SHA1':
        generatedHash = SHA1(inputText).toString(enc.Hex);
        break;
      case 'SHA256':
        generatedHash = SHA256(inputText).toString(enc.Hex);
        break;
      case 'SHA512':
        generatedHash = SHA512(inputText).toString(enc.Hex);
        break;
      default:
        break;
    }
    setHash(generatedHash);
  };

  const copyHash = () => {
    navigator.clipboard.writeText(hash);
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 3000);
  };

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>Hash Generator</PageHeading>
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
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[33%] h-fit'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Output</h5>
        <div className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Hash"
              placeholder="Hash"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={hash}
              readOnly
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={copyHash}
            />
          </div>
          <div className="relative inline-flex w-[100%] mb-4">
            <select
              className="bg-gray-700 p-3 pr-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border rounded-md text-white"
              value={selectedAlgorithm}
              onChange={(e) => setSelectedAlgorithm(e.target.value)}
            >
              <option value="MD5">MD5</option>
              <option value="SHA1">SHA1</option>
              <option value="SHA256">SHA256</option>
              <option value="SHA512">SHA512</option>
            </select>
          </div>
        </div>
      </Card>
      {showPrompt && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 text-white p-3 rounded-md">
          Hash copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default HashGenerator;
