import React, { useState } from "react";

const initialValues = [
    { select: false },
    { select: false },
    { select: false },
    { select: false },
    { select: false },
    { select: false },
    { select: false },
    { select: false },
];

const Question3 = () => {
    const [slots, setSlots] = useState(initialValues);

    function changeSlotLabel(index){
       const updatedSlots = slots.map((slot, id) => {
        if(id === index){
            return { ...slot, select: !slot.select }
        }
        else{
            return slot;
        }
       })
       setSlots(updatedSlots);
    }



    return (
        <div className="slotDiv">
        <div>
            <h4>Available Slots: {slots.filter((slot) => !slot.select).length}</h4>
        </div>
        <div>
            {slots.map((s, i) => (
            <button className="slotbtn" 
                style={{backgroundColor: s.select ? "green" : ""}}
                onClick={() => changeSlotLabel(i)} key={i}  
            >  {s.select ? "selected" : "Available"} </button>
            ))}
        </div>
        </div>
    );
};

export default Question3;
