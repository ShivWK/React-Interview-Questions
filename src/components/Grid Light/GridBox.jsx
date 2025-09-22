import { useEffect, useState } from "react";

const GridBox = ({ value }) => {
    const [ changeColor, setChangeColor ] = useState(false);

    useEffect(() =>{
        if (changeColor) {
            const timer = setTimeout(() =>{
                setChangeColor(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [changeColor]) 

    const clickHandler = () => {
        if (!value || changeColor) return;
        
        setChangeColor(true);
    }
  return (
    <div onClick={clickHandler} className="grid" style={{
        backgroundColor: value === 0 ? "blue" : changeColor ? "blue" : "red",
    }}></div>
  )
}

export default GridBox