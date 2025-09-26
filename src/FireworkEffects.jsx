import React, { useEffect, useState } from 'react';
import './FireWorkEffects.css';

function FireworkEffects() {
  const [lines, setLines] = useState([]);



  function safeUUID(){
    if(typeof crypto !== "undefined" && crypto.randomUUID){
      return crypto.randomUUID();
    }
    else{
      return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }
  }



  const handleClick = (e) => {
    const originX = e.clientX;
    const originY = e.clientY;


    const newLines = Array.from({ length: 20 }, () => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 100 + Math.random() * 150;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      return {
        id: safeUUID(),
        x: originX,
        y: originY,
        dx,
        dy,
        angle,
        distance,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      };
    });

    setLines((prev) => [...prev, ...newLines]);

    const idsToRemove = new Set(newLines.map((l) => l.id));
    setTimeout(() => {
      setLines((prev) => prev.filter((l) => !idsToRemove.has(l.id)));
    }, 1000);

  };




  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);



  return(
    <div className="FireWorks">
      {lines.map((line) => (
        <div
          key={line.id}
          className="line"
          style={{
            left: `${line.x}px`,
            top: `${line.y}px`,
            backgroundColor: line.color,
            transform: `translate(${line.dx}px, ${line.dy}px)`,
          }}
        />
      ))}
    </div>
  );
    
}

export default FireworkEffects;