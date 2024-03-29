import { useState, useEffect } from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCopy } from '@fortawesome/free-solid-svg-icons';

const CaseManipulator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedCase, setSelectedCase] = useState('Lowercase');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    manipulateCase();
  }, [inputText, selectedCase]);

  const manipulateCase = () => {
    let manipulatedText = '';
    switch (selectedCase) {
      case 'Lowercase':
        manipulatedText = inputText.toLowerCase();
        break;
      case 'Uppercase':
        manipulatedText = inputText.toUpperCase();
        break;
      case 'Title Case':
        manipulatedText = inputText.replace(/\b\w/g, (char) => char.toUpperCase());
        break;
      case 'Sentence case':
        manipulatedText = inputText.replace(/(^\w|\.\s\w)/g, (char) => char.toUpperCase());
        break;
      case 'Camel Case':
        manipulatedText = inputText.toLowerCase().replace(/(?<=\s|^)[a-z]/g, (char) => char.toUpperCase());
        break;
      case 'Snake Case':
        manipulatedText = inputText.toLowerCase().replace(/\s/g, '_');
        break;
      case 'Kebab Case':
        manipulatedText = inputText.toLowerCase().replace(/\s/g, '-');
        break;
      case 'Pascal Case':
        manipulatedText = inputText.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\s/g, '');
        break;
      default:
        break;
    }
    setOutputText(manipulatedText);
  };

  const copyText = () => {
    navigator.clipboard.writeText(outputText);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="w-[100%] flex flex-wrap justify-between gap-8 lg:gap-0">
      <PageHeading>Case Manipulator</PageHeading>
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
              id="TextOutput"
              placeholder="Manipulated Text"
              className="bg-gray-700 p-3 pl-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border resize-none h-48"
              value={outputText}
              readOnly
            />
            <FontAwesomeIcon
              icon={faCopy}
              className="absolute top-11 right-4 cursor-pointer text-gray-300"
              onClick={copyText}
            />
          </div>
          <div className="relative inline-flex w-[100%] mb-4">
            <select
              className="bg-gray-700 p-3 pr-10 focus:outline-none border-transparent border focus:border-blue-600 focus:border rounded-md text-white"
              value={selectedCase}
              onChange={(e) => setSelectedCase(e.target.value)}
            >
              <option value="Lowercase">Lowercase</option>
              <option value="Uppercase">Uppercase</option>
              <option value="Title Case">Title Case</option>
              <option value="Sentence case">Sentence case</option>
              <option value="Camel Case">Camel Case</option>
              <option value="Snake Case">Snake Case</option>
              <option value="Kebab Case">Kebab Case</option>
              <option value="Pascal Case">Pascal Case</option>
            </select>
          </div>
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

export default CaseManipulator;
