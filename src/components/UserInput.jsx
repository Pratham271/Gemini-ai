import React from 'react'

const UserInput = ({inputText,submitted,copyToClipboard}) => {

  return (
    <div className="flex items-start gap-4 pr-5 pt-5">
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-gradient-to-b from-teal-500">
          <img alt="user logo" fetchpriority="high" width="30" height="30" decoding="async" data-nimg="1" className="rounded-md" src="dev-ed-wave.png" />
        </div>
        <div className="group flex flex-1 justify-between gap-2">
          <div className="flex-1">
            <div className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 break-words">
              <p className="mb-2 last:mb-0">{submitted?inputText:""}</p>
            </div>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8"
          onClick={()=>copyToClipboard(inputText)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-4 w-4">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
          </button>
        </div>
      </div>
  )
}

export default UserInput
