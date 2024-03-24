import React, { useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const UUIDGenerator = () => {
  const [uuid, setUUID] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  const generateUUID = () => {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    setUUID(uuid);
  };

  const copyUUID = () => {
    navigator.clipboard.writeText(uuid);
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 3000);
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <Card tailStyle={'w-[50%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">UUID Generator</h5>
        <div className="p-4 px-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-white font-semibold">{uuid}</p>
            <FontAwesomeIcon
              icon={faCopy}
              className="cursor-pointer text-gray-300"
              onClick={copyUUID}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-700 text-white py-2 px-4 rounded-md"
              onClick={generateUUID}
            >
              Generate UUID
            </button>
          </div>
        </div>
      </Card>
      {showPrompt && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 text-white p-3 rounded-md">
          UUID copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default UUIDGenerator;
