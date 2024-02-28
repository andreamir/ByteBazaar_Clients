import { useRef } from 'react'
import useApi from '../../hooks/useApi'

function TestPageMarc() {
  const { isLoading, error, data, getData } = useApi()
  const routeInput = useRef()
  const methodInput = useRef()
  const bodyInput = useRef()

  function handleSend() {
    const petition = {
      route: routeInput.current.value,
      method: methodInput.current.value,
      body: bodyInput.current.value ? JSON.parse(bodyInput.current.value) : undefined,
    }
    console.log(petition)
    getData(petition)
  }  

  return(
    <>
      <h1>Marc's Test Page for useApi</h1>
      <h3>Petition</h3>
      <label>Route</label><input type="text" ref={routeInput}/>
      <br />
      <label>Method</label><select ref={methodInput}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>
      <br />
      <label>Body</label><textarea ref={bodyInput}/>
      <br />
      <button onClick={handleSend}>SEND</button>
      <h3>Response</h3>
      {data && <p>{JSON.stringify(data)}</p>}
      {error && <p>{error.msg}</p>}
      {isLoading && <p>Loading</p>}
    </>
  )
}

export default TestPageMarc