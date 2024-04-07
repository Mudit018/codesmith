import { useState } from 'react'
import Layout from '../../components/Api_Testing/http/Layout/Layout'
import Request from '../../components/Api_Testing/http/Workspace/Request/RequestPanel'
import Response from '../../components/Api_Testing/http/Workspace/Response/ResponsePanel'
import './Http.css'

const Http = () => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="http-testing">
      <Layout>
        <Request setResponse={setResponse} setLoading={setLoading} />
        <Response response={response} loading={loading} />
      </Layout>
    </div>
  )
}

export default Http
