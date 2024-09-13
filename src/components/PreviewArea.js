import React, { useCallback, useEffect, useRef, useState } from "react";
import CatSprite from "./CatSprite";
import Draggable from 'react-draggable';

export default function PreviewArea(props) {
const {x,y}=props.logoPosition;
const [rotate,setRotate] = useState(0);
const [position, setPosition] = useState({ x: 0, y: 0 });
const handleDrag = (e, data) => {
  setPosition({ x: data.x, y: data.y });
  props.setLogoPosition({ x: data.x, y: data.y });
  
};
useEffect(()=>{
  setRotate(props.rotate);
},[props.rotate])
useEffect(()=>{
  setPosition((prevPosition) => ({
    ...prevPosition, 
    x: props.logoPosition.x,
    y: props.logoPosition.y
  }));
},[props.logoPosition])


const style={
  transform: `translate(${position.x}px, ${position.y}px)`,
  transition: 'transform 0.3s ease',
}
  return (
    <div className="flex-none h-full"
    >
      <div
      style={{
        transform: ` rotate(${rotate}deg)`
      }}
      >
      <Draggable
        positionOffset={{x:position.x,y:position.y}}
        defaultPosition={{x:0,y:0}} 
        >
        <div
        style={style}
        >
        <CatSprite />
        </div>
      </Draggable>
      </div>
    </div>
  );
}
