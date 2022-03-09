import React from 'react';

export default function Card(props) {

    return <>

        <div className={`flex text-white w-52 h-52 mt-2 mr-2 p-5 items-center justify-center ${props.color ? props.color :'bg-white'}`}>

            {props.children}

        </div>

    </>

}

