import React, { useState } from "react";

const Question2 = () => {

    const [width, setWidth] = useState(0);
    const [color, setColor] = useState("");
    const [style, setStyle] = useState({});

    function createRectangle(e){
        e.preventDefault();
        setStyle({
            width: `${width}px`,
            height: "200px",
            backgroundColor: color
        })
        setColor('');
        setWidth('');
    }

    return (
        <div className="question2">
            <div>
                <div className="leftDiv">
                    <input type="text" 
                    placeholder="Enter width.."
                    value={width}
                    onChange={(e) => setWidth(e.target.value)} />

                    <input type="text" 
                    placeholder="Enter color.."
                    value={color}
                    onChange={(e) => setColor(e.target.value)} />
                    
                    <button onClick={createRectangle}>Click</button>
                </div>
        </div>
        <div className="rightDiv">
            <h2>Result:</h2>
            <div style={style}></div>
        </div>
        </div>
    );
};

export default Question2;
