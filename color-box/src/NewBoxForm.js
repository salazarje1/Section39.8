import React, { useState } from 'react'; 
import './NewBoxForm.css'; 

const NewBoxForm = ({ addBox }) => {
    const INITIALSTATE = {
        color: '',
        width: '',
        height: ''
    }

    const [formData, setFormData] = useState(INITIALSTATE);

    const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData(formData => ({
            ...formData,
            [name]: value
         }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addBox({ ...formData });
        setFormData(INITIALSTATE); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='color'>Color</label>
                <input 
                    type="text"
                    name="color"
                    id="color"
                    placeholder='color'
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='width'>Width</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    name="width"
                    id="width"
                    placeholder='width'
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>
            <div>
            <label htmlFor='height'>height</label>
            <input
                type="number"
                min="1"
                max="10"
                name="height"
                id="height"
                placeholder='height'
                value={formData.height}
                onChange={handleChange}
            />
            </div>
            <button>Add Box</button>
        </form>
    )
}


export default NewBoxForm; 