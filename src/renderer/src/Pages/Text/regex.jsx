import { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCopy } from '@fortawesome/free-solid-svg-icons';

const Regex = () => {
  const [regexInput, setRegexInput] = useState('');
  const [inputText, setInputText] = useState('');
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    testRegex();
  }, [regexInput, inputText]);

  const testRegex = () => {
    const regex = new RegExp(regexInput);
    const matches = inputText.match(regex);
    setMatches(matches);
  };

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>Regex Tester</PageHeading>
      <Card tailStyle={'w-[100%] lg:w-[35%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Regex Input</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Regex"
              placeholder="Enter regex here"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={regexInput}
              onChange={(e) => setRegexInput(e.target.value)}
            />
            <FontAwesomeIcon icon={faPenToSquare} className="absolute top-11 left-4" />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[35%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Input Text</h5>
        <form action="" className="p-4 px-6 ">
          <div className="relative inline-flex flex-col w-[100%] mb-4">
            <textarea
              id="Text"
              placeholder="Enter text to test"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <FontAwesomeIcon icon={faPenToSquare} className="absolute top-11 left-4" />
          </div>
        </form>
      </Card>
      <Card tailStyle={'w-[100%] lg:w-[30%]'}>
        <h5 className="p-3 px-6 border-b border-gray-700">Matches</h5>
        <div className="p-4 px-6 ">
          <textarea
            id="Matches"
            placeholder="Matches will appear here"
            className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
            readOnly
            value={matches?.join('\n') || 'No matches found'}
          />
        </div>
      </Card>
    </div>
  );
};

export default Regex;