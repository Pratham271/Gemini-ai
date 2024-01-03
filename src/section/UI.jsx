import React from 'react'
import Form from '../components/Form'
import ChatWindow from '../components/ChatWindow'


const UI = ({inputText, data, fetchDataFromGeminiAPI,handleChange,loading, submitted, copyToClipboard,fetchDataFromGeminiProVisionAPI}) => {
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-center">
        <h1 className="text-3xl font-semibold text-white">Gemini Chatbot</h1>
        <p className="mt-2 text-lg text-white">Made with &hearts; by Pratham</p>
      </div>
        <div className="space-y-4 max-w-5xl w-full">
            <ChatWindow inputText={inputText} data={data} loading={loading} submitted={submitted} copyToClipboard={copyToClipboard}/>
            <Form fetchDataFromGeminiAPI={fetchDataFromGeminiAPI} handleChange={handleChange} inputText={inputText} fetchDataFromGeminiProVisionAPI={fetchDataFromGeminiProVisionAPI}/>
        </div>
    </>
  )
}

export default UI
