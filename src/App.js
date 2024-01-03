
import "./App.css";
import Chatbot from "./section/Chatbot";
// import UI from "./components/UI";


function App() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 p-24 bg-gradient-to-r from-black to-gray-600">
        <Chatbot/>
        {/* <UI/> */}
    </div>
  );
}
export default App;