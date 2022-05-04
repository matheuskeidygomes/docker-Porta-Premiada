import React from 'react';

export default function Input(props) {

    return <>
    
        <div className="flex flex-col justify-center items-center">

            <span className="text-black text-center text-3xl"> {props.text} </span>

            <div className="flex flex-row justify-center items-center">

                <button className="text-5xl text-black font-bold" onClick={() => props.onChange(props.value -1)}> - </button>
                
                <span className="text-black font-bold text-5xl mt-3 p-3"> {props.value} </span>
                
                <button className="text-5xl text-black font-bold" onClick={() => props.onChange(props.value +1)}> + </button>
            
            </div>  

        </div>

    </>

}