import React from "react";
import Present from '../present/index';

export default function Door(props) {

    const door = props.value;
    const select = door.selected && !door.open ? 'border-yellow-300 text-yellow-300' : 'border-yellow-900';


    function SelectAction (e) {
        props.onChange(door.SelectOther());
    }

    function OpenAction (e) {
        e.stopPropagation();
        props.onChange(door.Open());
    }


    return <>

        <div className="flex flex-col items-center w-44 h-auto relative cursor-pointer m-7" onClick={(e) => SelectAction(e)}>

            <div className={`flex grow items-end justify-center w-11/12 h-60 bg-gray-900 ${select} border-r-4 border-l-4 border-t-4`}>

                {door.open ? 

                    door.present ?
                
                        <Present/>

                        :

                        false

                    :

                    <div className={`bg-yellow-700 flex flex-col grow w-full h-full justify-center items-center p-3`}>

                        <div className={`text-5xl ${select}`}>  {door.number} </div>

                        <div className="self-start bg-yellow-900 h-6 w-6 rounded-full absolute" onClick={(e) => OpenAction(e)}> </div>

                    </div>
                }

            </div>

            <div className="bg-gray-300 w-44 h-2">  </div>

        </div>

    </>

}
