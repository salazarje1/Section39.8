import React, { useState } from 'react'; 
import { v4 as uuid } from 'uuid'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const INITIALSTATE = [
        {id: uuid(), color: "red", width: 10, height: 10},
        {id: uuid(), color: "blue", width: 3, height: 3}
    ]; 

    const [boxes, setBoxes] = useState(INITIALSTATE); 

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }

    const removeBox = (boxId) => {
        setBoxes(boxes => boxes.filter(box => box.id !== boxId)); 
    }

    return (
        <div className='BoxList'>
            <h2>Boxes</h2>
            <NewBoxForm addBox={addBox} />
            <div className='BoxList-boxes'>
                {boxes.map(({id, color, width, height}) => <Box removeBox={removeBox} id={id} key={id} color={color} width={width} height={height} />)}
            </div>
        </div>
    )
}

export default BoxList; 