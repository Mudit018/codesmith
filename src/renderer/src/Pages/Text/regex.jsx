import { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Regex = () => {
  const [regexPattern, setRegexPattern] = useState('');
  const [inputText, setInputText] = useState('');
  const [matches, setMatches] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    testRegex();
  }, [regexPattern, inputText]);

  const testRegex = () => {
    try {
      const regex = new RegExp(regexPattern, 'g');
      const foundMatches = inputText.match(regex);
      setMatches(foundMatches || []);
    } catch (error) {
      setMatches([]);
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>Regex Tester</PageHeading>
      <Card tailStyle={'w-full lg:w-[33%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Regex Pattern</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-full mb-4">
            <input
              type="text"
              id="RegexPattern"
              placeholder="Regex Pattern"
              className="bg-gray-700 p-3 pl-10 pr-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border w-full"
              value={regexPattern}
              onChange={(e) => setRegexPattern(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-3 right-4 cursor-pointer text-gray-300"
              onClick={() => copyText(regexPattern)}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-full lg:w-[33%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Input Text</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-full mb-4">
            <textarea
              id="InputText"
              placeholder="Input Text"
              className="bg-gray-700 p-3 pl-10 pr-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48 w-full"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-3 right-4 cursor-pointer text-gray-300"
              onClick={() => copyText(inputText)}
            />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-full lg:w-[33%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Regex Matches</h5>
        <div className="p-4 px-6 ">
          <ul className="list-disc pl-5">
            {matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        </div>
      </Card>
      {showAlert && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-900 text-white p-3 rounded-md">
          Text copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Regex;
