import React, {useState} from "react";
import Card from '../../components/card/index';
import Input from '../../components/input/index';
import { Link } from 'react-router-dom';

export default function Home() {

    const [ qntDoors, setQntDoors ] = useState(3);
    const [ presentDoor, setPresentDoor ] = useState(1);
 
    return <>

        <div className="flex flex-col justify-center items-center h-screen">

            <div className="flex flex-row">

                <Card color='bg-red-500'>
                    <h1 className="font-bold text-4xl"> Porta Premiada </h1> 
                </Card>

                <Card color="bg-gray-300">
                   <Input text="Qnt Portas?" value={qntDoors} onChange={(QntDoors) => setQntDoors(QntDoors)} />
                </Card>

            </div>

            <div className="flex flex-row">

                <Card>
                    <Input text="Porta com presente?" value={presentDoor} onChange={(PresentDoor) => setPresentDoor(PresentDoor)} />
                </Card>

                <Card color='bg-green-600'>

                    <Link to={`/game/${qntDoors}/${presentDoor}`}>
                        <h2 className="font-bold text-4xl"> Iniciar </h2>
                    </Link>
                    
                </Card>

            </div>

        </div>
    
    </>

}