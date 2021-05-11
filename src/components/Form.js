import React from 'react'

export const Form = ({ name, surname, age, inputChange}) => {
    return (
        <div>
            <h2>Form</h2>
            <input 
            onChange={inputChange}
            type="text" 
            name="name" 
            placeholder="Name"/>
            <p>{name}</p>


            <input 
             onChange={inputChange}
            type="text" 
            name="surname" 
            placeholder="Surname"/>
            <p>{surname}</p>


            <input 
            onChange={inputChange}
            type="text" 
            name="age" 
            placeholder="Age"/>
            <p>{age}</p>
        </div>
    )
}


