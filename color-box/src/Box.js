import React from 'react'; 

import './Box.css'; 


const Box = ({removeBox, id, color, width=3, height=3}) => {
    return (
        <div className='Parent'>
            <div 
                className='Box'
                style={{
                    backgroundColor: color,
                    width: `${width * 20}px`,
                    height: `${height * 20}px`
                }}
            ></div>
            <button style={{backgroundColor: color}} className='Box-button' onClick={() => removeBox(id)}>X</button>
        </div>
        
    )
}


export default Box; 