import React, { useState } from 'react'
import axios from 'axios';
import PMList from './PMList';

export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit(browser)
        e.preventDefault();
        //make a post request to the database to create a new person
        axios.post('http://localhost:8000/api/pm', {
            name,
            price,
            description,
        }) //Passes an object as created here.
            .then(res=>console.log(res)) //.then and .catch are promise resolutions.
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse)
                console.log(errorResponse.name)
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);}) //Object is the actual JS Object class.
    }

    //onChange to update name, price, and description.
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

