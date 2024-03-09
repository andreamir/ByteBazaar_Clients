import { useState } from 'react'

const endpoint = 'https://bytebazaar.onrender.com'
// const endpoint = 'http://localhost:3003'


function useApi() {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  async function getData({ route, method = 'GET', body, headers = {} }) {
    setError()
    setData()
    setIsLoading(true)

    const response = await fetch(endpoint + route, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    })
    if (response.ok) {
      const responseAsJson = await response.json()
      // console.log(responseAsJson);
      if (responseAsJson.token) {
        localStorage.token = responseAsJson.token
        localStorage.user = responseAsJson.user
      }
      setData(responseAsJson)
      setIsLoading(false)
    } else {
      const responseAsJson = await response.json()
      setError(responseAsJson)
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, getData }
}

export default useApi;