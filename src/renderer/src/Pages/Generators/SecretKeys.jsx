import { useState } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const SecretKeys = () => {
  const [length, setLength] = useState(50);
  const [token, setToken] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  const generateToken = (specificLength) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let generatedToken = '';
    const tokenLength = specificLength ? length : Math.floor(Math.random() * 51) + 50; // Random length between 50 and 100

    for (let i = 0; i < tokenLength; i++) {
      generatedToken += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setToken(generatedToken);
  };

  const copyToken = () => {
    navigator.clipboard.writeText(token);
    setShowPrompt(true);
    setTimeout(() => {
      setShowPrompt(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>Token Generator</PageHeading>
      <Card tailStyle="w-full lg:w-[65%]">
        <h5 className="p-3 px-6 border-b border-gray-700">Generate Token</h5>
        <div className="p-4 px-6">
          <div className="mb-4 flex items-center">
            <label htmlFor="length" className="mr-2">Length:</label>
            <input
              id="length"
              type="number"
              className="bg-gray-700 p-2 border border-gray-600 rounded-md text-white w-20"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={() => generateToken(true)}
            >
              Generate Token (Specific Length)
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
              onClick={() => generateToken(false)}
            >
              Generate Token (Random Length)
            </button>
          </div>
        </div>
      </Card>
      <Card tailStyle="w-full lg:w-[33%] h-fit">
        <h5 className="p-3 px-6 border-b border-gray-700">Token</h5>
        <div className="p-4 px-6">
          <div className="relative inline-flex flex-col w-full mb-4">
            <textarea
              id="Token"
              placeholder="Token"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={token}
              readOnly
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={copyToken}
            />
          </div>
        </div>
      </Card>
      {showPrompt && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 text-white p-3 rounded-md">
          Token copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default SecretKeys;