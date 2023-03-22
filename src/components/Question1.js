import React, { useState, useRef } from 'react'

const Question1 = () => {

    const ref = useRef(null);
  
    const [counter, setCounter] = useState(1);
    const [color, setColor] = useState("");
    const [bool, setBool] = useState(false);

    function counterClick(){
        setCounter(prev => prev + 1)
    }

    function colorClick(){
        const bgColor = window.getComputedStyle(ref.current).backgroundColor;
        if(!bool){
            setColor(bgColor);
        }
    }

    return (
        <div className='questionOne'>
            <div className='outer'>
                <div className='counter' style={{backgroundColor: color}} >
                    <h5>{counter}</h5>
                    <span onClick={counterClick}>Click to increase counter</span>
                </div>
            </div>
            <div className='btnDiv'> 
                <button className='colorBtn' ref={ref} onClick={colorClick}>Change Color</button>
            </div>
        </div>
    )
}

export default Question1
