import React from 'react'
import UserInput from './UserInput'
import Output from './Output'

const ChatWindow = ({inputText,data,loading,submitted,copyToClipboard}) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 shadow-xl pb-0">
    <div className="flex h-[50vh] flex-col gap-5 divide-y overflow-y-auto pb-4">
      <UserInput inputText={inputText} submitted={submitted} copyToClipboard={copyToClipboard}/>
      <div className="flex items-start gap-4 pr-5 pt-5">
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-black text-white shadow">
        <img alt="Chatbot" fetchpriority="high" width="24" height="24" decoding="async" data-nimg="1" className="rounded-md" src="chatbot.png" style={{color: "transparent"}}/>
        </div>
       <Output data={data} loading={loading} copyToClipboard={copyToClipboard}/>
      </div>
    </div>
  </div>
  )
}

export default ChatWindow
