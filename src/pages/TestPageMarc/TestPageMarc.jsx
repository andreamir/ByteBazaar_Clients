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
      <br />
      <h2>Petition:</h2>
      <h5>https://bytebazaar.onrender.com...</h5>
      <label>Route:</label><input type="text" ref={routeInput}/>
      <br /><br />
      <label>Method</label><select ref={methodInput}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PATCH">PATCH</option>
      </select>
      <br /><br />
      <label>Body</label><textarea ref={bodyInput} rows="10" cols="50"/>
      <br /><br />
      <button onClick={handleSend}>SEND</button>
      <br />
      <h3>Response:</h3>
      <br />
      {data && <p>{JSON.stringify(data)}</p>}
      {error && <p>{error.msg}</p>}
      {isLoading && <p>Loading</p>}
    </>
  )
}

export default TestPageMarc