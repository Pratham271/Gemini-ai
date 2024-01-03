import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import UI from './UI';


const Chatbot = () => {
  const [data,setData] = useState();
    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
    const [submitted,setSubmitted] = useState(false);
    const [inputText,setInputText] = useState("");
    const [loading,setLoading] = useState(false);
    const fetchDataFromGeminiAPI = async(e) =>{
        try {
            e.preventDefault();
            if(!inputText){
                alert("Please enter text")
                return;
            }

            setSubmitted(true);
            setLoading(true);
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});
          
            const result = await model.generateContent(inputText);
         

            const response = await result.response;
            const text = response.text();
        
            setLoading(false);
          
            setData(text);


        } catch (error) {
            setLoading(false);
            console.log("Error in fetching data from the api :",error);
        }
    }

    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]);
          reader.readAsDataURL(file);
        });
        return {
          inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
      }
      const handleChange = (e) => {
        setInputText(e.target.value);
        setSubmitted(false);
       
      }
      const copyToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('Text copied to clipboard');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
     };
    const fetchDataFromGeminiProVisionAPI = async(e,fileInput) =>{
      e.preventDefault();
        try {
            if(!inputText){
                alert("Please upload text")
                return;
            }
            setSubmitted(true);

            setLoading(true);
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-pro-vision"});
            

            // const fileInputEl = document.querySelector("input[type=file]");
            const imageParts = await Promise.all(
              [...fileInput.files].map(fileToGenerativePart)
            );
          
            const result = await model.generateContent([inputText, ...imageParts]);
            const response = await result.response;
            const text = response.text();
          
            setLoading(false);
            setData(text)
        } catch (error) {
            setLoading(false);
            console.log("Error in fetching data from the api :",error);
        }
    }
    
  return (
    <>
      <UI inputText={inputText} data={data} fetchDataFromGeminiAPI={fetchDataFromGeminiAPI} copyToClipboard={copyToClipboard} handleChange={handleChange} loading={loading} submitted={submitted} fetchDataFromGeminiProVisionAPI={fetchDataFromGeminiProVisionAPI}/>
    </>
  )
}

export default Chatbot
