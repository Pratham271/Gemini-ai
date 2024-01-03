import React, {useState,useRef} from 'react'

const Form = ({fetchDataFromGeminiAPI, handleChange,fetchDataFromGeminiProVisionAPI}) => {
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      await fetchDataFromGeminiProVisionAPI(e, fileInputRef.current);
    } else {
      await fetchDataFromGeminiAPI(e);
    }
    setFile(null);
 };
  return (
    <form className="rounded-xl bg-white p-4 shadow-xl space-y-4" onSubmit={handleSubmit}>
    <div className="flex w-full items-start justify-between gap-4 ">
      <input type="text"  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
      autoFocus 
      onChange={handleChange}
      placeholder="type a message"/>
      <div className="self-stretch">
        <input type="file" ref={fileInputRef} id="fileInput"  style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
        <label htmlFor="fileInput" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-black h-10 w-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 w-4 h-4">
          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
          </svg>
        </label>
      </div>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-700 text-white hover:bg-gray-900 h-10 px-4 py-2" type="submit">Send message</button>
    </div>
  </form>
  )
}

export default Form
