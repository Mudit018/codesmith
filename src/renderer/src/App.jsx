import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import RootLayout from './layout/RootLayout/RootLayout'
import Settings from './Pages/Settings/Settings'
// Converters
import JsonYml from './Pages/Converters/JsonYml'
import NumberBase from './Pages/Converters/NumberBase'
import Timestamp from './Pages/Converters/Timestamp'
// Encoders and Decoders
import EdBase64 from './Pages/Encoders_Decoders/Base64Text'
import EdHtml from './Pages/Encoders_Decoders/Html'
import EdJwt from './Pages/Encoders_Decoders/Jwt'
import EdUrl from './Pages/Encoders_Decoders/Url'
// Generators
import Checksum from './Pages/Generators/Checksum'
import HashGenerator from './Pages/Generators/Hash'
import RandomText from './Pages/Generators/RandomText'
import SecretKeys from './Pages/Generators/SecretKeys'
import Uuid from './Pages/Generators/Uuid'
// Graphic
import ColorPicker from './Pages/Graphic/ColorPicker'
// Text
import CaseManipulator from './Pages/Text/CaseManipulator'
import MarkdownPreview from './Pages/Text/MarkdownPreview'
import Regex from './Pages/Text/Regex'
// Api Testing
import Http from './Pages/Api_Testing/Http'
import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route path="*" element={<Dashboard />} />
          <Route path="/json-yml" element={<JsonYml />} />
          <Route path="/number-base" element={<NumberBase />} />
          <Route path="/timestamp" element={<Timestamp />} />
          <Route path="/base64" element={<Base64 />} />
          <Route path="/html" element={<EdHtml />} />
          <Route path="/jwt" element={<EdJwt />} />
          <Route path="/url" element={<EdUrl />} />
          <Route path="/checksum" element={<Checksum />} />
          <Route path="/hash" element={<HashGenerator />} />
          <Route path="/random-text" element={<RandomText />} />
          <Route path="/secret-keys" element={<SecretKeys />} />
          <Route path="/uuid" element={<Uuid />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/case-manipulator" element={<CaseManipulator />} />
          <Route path="/markdown-preview" element={<MarkdownPreview />} />
          <Route path="/regex" element={<Regex />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/apiTestingHttp" element={<Http />} />
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
