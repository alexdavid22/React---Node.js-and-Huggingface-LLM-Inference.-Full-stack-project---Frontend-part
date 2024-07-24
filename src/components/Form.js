import React, { useState } from "react"
import "../Form.css"

function Form() {
  const [request, setRequest] = useState("")
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("http://localhost:3001/api/generate-offer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ request }),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      setResponse(data.message)
      setLoading(false)
    } catch (error) {
      console.error("Error generating offer:", error)
    }
  }

  return (
    <div className="dark-layout">
      <h1>Client Request Form</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={request}
          onChange={e => setRequest(e.target.value)}
          placeholder="Describe the app you desire..."
          className="textarea-style"
        />
        <button type="submit" className="button-style">
          Send
        </button>
      </form>
      <div className="response-style">
        {!response && loading ? (
          <h2>The AI is generating the reponse... Please wait.</h2>
        ) : (
          <pre>{response}</pre>
        )}
      </div>
    </div>
  )
}

export default Form
