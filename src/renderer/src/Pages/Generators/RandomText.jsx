import React, { useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const RandomTextGenerator = () => {
  const [textLength, setTextLength] = useState(100);
  const [generatedText, setGeneratedText] = useState('');

  const generateRandomText = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < textLength; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedText(text);
  };

  const copyText = () => {
    navigator.clipboard.writeText(generatedText);
    alert('Text copied to clipboard!');
  };

  return (
    <div className="w-full flex flex-wrap justify-between gap-8 lg:gap-0">
      <Card tailStyle={'w-[100%]'}>
        <div className="p-4 px-6">
          <PageHeading>Random Text Generator</PageHeading>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-4 w-full">
              <input
                type="number"
                className="bg-gray-700 p-3 pl-4 pr-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border w-1/3"
                value={textLength}
                onChange={(e) => setTextLength(e.target.value)}
              />
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
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48 w-full"
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
  );
};

export default RandomTextGenerator;


