import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [logoPosition,setLogoPosition] = useState({
    x:0,
    y:0
  })
  const [rotate,setRotate]=useState(0);
  useEffect(()=>{
    setRotate(0)
  },[])
  const clickHandler=(name,value)=>{
    if(name==='x'){
      setLogoPosition((prevPosition) => ({
        ...prevPosition, 
        x: prevPosition.x + 10
      }));
    }else if(name === 'xy'){
      setLogoPosition((prevPosition) => ({
        ...prevPosition, 
        x: prevPosition.x + value.x,
        y: prevPosition.x + value.y
      }));
    }else if(name === 'rotate-back'){
      setRotate((prev)=>prev-15);
    }else if(name === 'rotate-front'){
      setRotate((prev)=>prev+15);
    }
  }
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar clickHandler={clickHandler}/> <MidArea onDragEnd={()=>{}}/>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea setLogoPosition={setLogoPosition} logoPosition={logoPosition} rotate={rotate}/>
        </div>
      </div>
    </div>
  );
}
