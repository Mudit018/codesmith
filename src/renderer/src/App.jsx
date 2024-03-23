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
import JsonYml from './Pages/Converters/json_yml'
import NumberBase from './Pages/Converters/number_base'
import Timestamp from './Pages/Converters/timestamp'
// Encoders and Decoders
import Base64 from './Pages/Encoders_Decoders/base64_text'
import EdHtml from './Pages/Encoders_Decoders/html'
import EdJwt from './Pages/Encoders_Decoders/jwt'
import EdUrl from './Pages/Encoders_Decoders/url'
// Generators
import Checksum from './Pages/Generators/checksum'
import Hash from './Pages/Generators/hash'
import RandomText from './Pages/Generators/random_text'
import SecretKeys from './Pages/Generators/secret_keys'
import Uuid from './Pages/Generators/uuid'
// Graphic
import ColorPicker from './Pages/Graphic/color_picker'
// Text 
import CaseManipulator from './Pages/Text/case_manipulator'
import MarkdownPreview from './Pages/Text/markdown_preview'
import Regex from './Pages/Text/regex'

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
          <Route path="/hash" element={<Hash />} />
          <Route path="/random-text" element={<RandomText />} />
          <Route path="/secret-keys" element={<SecretKeys />} />
          <Route path="/uuid" element={<Uuid />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/case-manipulator" element={<CaseManipulator />} />
          <Route path="/markdown-preview" element={<MarkdownPreview />} />
          <Route path="/regex" element={<Regex />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
