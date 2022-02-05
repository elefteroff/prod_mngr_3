import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const ProdDetail = (props) => {
    const [pm, setPm] = useState({})
    const { id } = useParams();  //Grabbing the id (which is the variable name) from the url via useParams
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pms/' + id)
            .then(res => {
                console.log(res.data)
                setPm(res.data)})
            .catch(err => console.error(err));
    }, []);
    
    // const removeFromThisDom = pmId => {
    //     setPm(pm.filter(pm => pm.id != pmId));
    // }

    const deleteOnePMs = (_id) => {
        axios.delete('http://localhost:8000/api/pms/' + _id)
            .then(res => {
                history.push("/pm");
                // removeFromThisDom(_id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h3>Product Details:</h3>
            <p>Name: {pm.name}</p>
            <p>Price: {pm.price}</p>
            <p>Description: {pm.description}</p>
            <button onClick={(e)=>{deleteOnePMs(pm._id)}}>Delete</button>
        </div>
    )
}

export default ProdDetail;