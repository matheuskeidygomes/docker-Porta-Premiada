import React, { useEffect, useState } from 'react';
import Door from '../../components/door/index';
import DoorModel from '../../models/door/index';
import '../../index.css';
import { Link, useParams } from 'react-router-dom';

export default function Game() {

    const { door, present } = useParams();
    const [ doors, setDoors ] = useState(createDoors(+door, +present));
    const [ validDoor, setValidDoor ] = useState(false);

    useEffect(()=> { 

      const validDoor = door >= 3 && door <= 100;
      const validPresent = +present >= 1 && +present <= door;

      console.log(validDoor);
      console.log(validPresent);

      setValidDoor(validDoor && validPresent);

    }, [doors]);
    
    function createDoors(qnt, presentDoor) {

      return Array.from({ length:qnt }, (door,i) => {

        const number = i + 1;
        const present = number === presentDoor;
        return new DoorModel(number, present);
      });
    } 

    function renderDoors() {

      return validDoor ?

        doors.map((door) => {

          return <Door key={door.number} value={door} onChange={ (newDoor) => setDoors(updateDoors(doors, newDoor))} />
        })

      :

        <div className='p-10 text-xl font-bold'> Por favor, insira uma porta com valor válido! </div>

    }

    function updateDoors(doors, modifiedDoor) {

      return doors.map(door => {

        if(door.number === modifiedDoor.number) {

          return modifiedDoor;

        } else {

          return modifiedDoor.open ? door : door.Deselect();
        }
      });

    }

    return <>

      <div className={`flex flex-col justify-center items-center`}>

        <div className='flex flex-wrap justify-center'>

          {renderDoors()}
  
        </div>

        <div className="flex justify-center">

            <Link to="/">

                <button className='bg-red-600 p-3 rounded-lg font-bold mb-10 mt-5'> Reiniciar jogo </button>

            </Link>

        </div>
    
      </div>

    </>

}


